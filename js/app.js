document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal-overlay');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');
  const tooltip = document.getElementById('tooltip');

  // Initialize map interactions
  initMap();

  function initMap() {
    const paths = document.querySelectorAll('#tama-map .municipality');
    paths.forEach(path => {
      const code = path.id;
      const data = MUNICIPALITY_DATA[code];

      // Color coding: data available vs not
      if (data && data.hasData) {
        path.setAttribute('fill', '#c8e6c9');
      } else {
        path.setAttribute('fill', '#e0e0e0');
      }

      // Click handler
      path.addEventListener('click', () => handleClick(code));

      // Tooltip on hover
      path.addEventListener('mouseenter', (e) => {
        const name = path.getAttribute('data-name') || (data ? data.name : '');
        showTooltip(e, name);
        path.setAttribute('fill', data && data.hasData ? '#81c784' : '#bdbdbd');
      });

      path.addEventListener('mousemove', (e) => moveTooltip(e));

      path.addEventListener('mouseleave', () => {
        hideTooltip();
        if (data && data.hasData) {
          path.setAttribute('fill', '#c8e6c9');
        } else {
          path.setAttribute('fill', '#e0e0e0');
        }
      });
    });
  }

  function handleClick(code) {
    const data = MUNICIPALITY_DATA[code];
    if (!data) return;

    if (data.hasData) {
      renderModal(data);
    } else {
      renderNoData(data.name);
    }
    openModal();
  }

  function renderModal(data) {
    modalTitle.textContent = data.name;
    let html = '';

    // 教会情報
    if (data.churches) {
      html += '<section class="modal-section">';
      html += '<h3 class="section-title">教会情報</h3>';
      if (data.churches.kyoudan && data.churches.kyoudan.length > 0) {
        html += '<div class="data-row"><span class="data-label">教団の教会</span>';
        html += '<span class="data-value">' + escapeHtml(data.churches.kyoudan.join('、')) + '</span></div>';
      }
      if (data.churches.otherDenominations && data.churches.otherDenominations.length > 0) {
        html += '<div class="data-row"><span class="data-label">他教団・教派</span>';
        html += '<span class="data-value">' + escapeHtml(data.churches.otherDenominations.join('、'));
        if (data.churches.otherCount) {
          html += '　他' + data.churches.otherCount + '教会';
        }
        html += '</span></div>';
      }
      html += '</section>';
    }

    // 基礎データ
    if (data.basicData) {
      html += '<section class="modal-section">';
      html += '<h3 class="section-title">基礎データ</h3>';
      html += '<div class="basic-data-grid">';
      html += '<div class="basic-data-card">';
      html += '<div class="basic-data-number">' + formatNumber(data.basicData.population) + '</div>';
      html += '<div class="basic-data-unit">人</div>';
      html += '<div class="basic-data-label">人口';
      if (data.basicData.populationDate) {
        html += ' (' + escapeHtml(data.basicData.populationDate) + ')';
      }
      html += '</div></div>';

      html += '<div class="basic-data-card">';
      html += '<div class="basic-data-number">' + data.basicData.area + '</div>';
      html += '<div class="basic-data-unit">km\u00B2</div>';
      html += '<div class="basic-data-label">面積</div></div>';

      html += '<div class="basic-data-card">';
      html += '<div class="basic-data-number">' + formatNumber(data.basicData.density) + '</div>';
      html += '<div class="basic-data-unit">人/km\u00B2</div>';
      html += '<div class="basic-data-label">人口密度</div></div>';
      html += '</div>';
      html += '</section>';
    }

    // 学校関係データ
    if (data.schools) {
      html += '<section class="modal-section">';
      html += '<h3 class="section-title">学校関係データ</h3>';
      html += renderSchoolSection('小学校', data.schools.elementary);
      html += renderSchoolSection('中学校', data.schools.middleSchool);
      html += renderSchoolSection('高等学校', data.schools.highSchool);
      html += renderSchoolSection('大学', data.schools.university);
      html += '</section>';
    }

    // 人口構成
    if (data.populationComposition && data.populationComposition.data) {
      html += '<section class="modal-section">';
      html += '<h3 class="section-title">人口構成</h3>';
      html += renderPopulationChart(data.populationComposition);
      if (data.populationComposition.notes) {
        html += '<p class="section-notes">' + escapeHtml(data.populationComposition.notes) + '</p>';
      }
      html += '</section>';
    }

    // 産業構造
    if (data.industryStructure) {
      html += '<section class="modal-section">';
      html += '<h3 class="section-title">産業構造</h3>';
      html += '<p>' + escapeHtml(data.industryStructure) + '</p>';
      html += '</section>';
    } else if (data.hasData) {
      html += '<section class="modal-section">';
      html += '<h3 class="section-title">産業構造</h3>';
      html += '<p class="no-data-text">データ準備中</p>';
      html += '</section>';
    }

    modalBody.innerHTML = html;
  }

  function renderSchoolSection(label, schoolData) {
    if (!schoolData || schoolData.count === null) {
      return '<div class="school-row"><span class="school-label">' + escapeHtml(label) +
             '</span><span class="school-value">---</span></div>';
    }

    let html = '<div class="school-row">';
    html += '<span class="school-label">' + escapeHtml(label) + '</span>';
    html += '<span class="school-value">';
    html += schoolData.count + '校';
    if (schoolData.privateCount) {
      html += '（内 私立' + schoolData.privateCount + '）';
    }
    html += '</span>';
    html += '</div>';

    if (schoolData.publicStudents) {
      html += '<div class="school-detail">';
      html += '生徒数（公立）：' + formatNumber(schoolData.publicStudents) + '人';
      if (schoolData.publicStudentsYear) {
        html += '（' + escapeHtml(schoolData.publicStudentsYear) + '）';
      }
      html += '</div>';
    }

    if (schoolData.privateSchools && schoolData.privateSchools.length > 0) {
      html += '<div class="school-detail private-schools">';
      html += '私立：';
      const schoolNames = schoolData.privateSchools.map(s => {
        let name = escapeHtml(s.name);
        if (s.denomination) {
          name += '<span class="denomination">（' + escapeHtml(s.denomination) + '）</span>';
        }
        return name;
      });
      html += schoolNames.join('、');
      html += '</div>';
    }

    return html;
  }

  function renderPopulationChart(composition) {
    const maxCount = Math.max(...composition.data.map(d => d.count));
    let html = '<div class="pop-chart">';

    composition.data.forEach(item => {
      const pct = (item.count / maxCount) * 100;
      html += '<div class="pop-row">';
      html += '<span class="pop-label">' + escapeHtml(item.range) + '</span>';
      html += '<div class="pop-bar-container">';
      html += '<div class="pop-bar" style="width:' + pct.toFixed(1) + '%"></div>';
      html += '</div>';
      html += '<span class="pop-count">' + formatNumber(item.count) + '人</span>';
      html += '</div>';
    });

    html += '</div>';
    return html;
  }

  function renderNoData(name) {
    modalTitle.textContent = name;
    modalBody.innerHTML =
      '<div class="no-data-container">' +
      '<div class="no-data-icon">&#128203;</div>' +
      '<p class="no-data-message">データ準備中</p>' +
      '<p class="no-data-sub">この市区町村のデータは現在準備中です。<br>今後追加予定です。</p>' +
      '</div>';
  }

  // Modal open/close
  function openModal() {
    modal.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('visible');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Tooltip
  function showTooltip(e, name) {
    tooltip.textContent = name;
    tooltip.classList.add('visible');
    moveTooltip(e);
  }

  function moveTooltip(e) {
    tooltip.style.left = (e.pageX + 12) + 'px';
    tooltip.style.top = (e.pageY - 30) + 'px';
  }

  function hideTooltip() {
    tooltip.classList.remove('visible');
  }

  // Utilities
  function formatNumber(n) {
    if (n === null || n === undefined) return '---';
    return n.toLocaleString('ja-JP');
  }

  function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
});
