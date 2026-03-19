#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
季刊教会誌 総目次 HTMLジェネレーター
JSON → WordPress用 HTMLページ を生成

使い方:
  python3 generate_html.py
  → output/database_page.html を出力
"""

import json
import os
import re

DATA_FILE = "data/issues.json"
OUTPUT_FILE = "output/database_page.html"

os.makedirs("output", exist_ok=True)


def load_issues():
    with open(DATA_FILE, encoding="utf-8") as f:
        return json.load(f)["issues"]


def issue_label(issue):
    """号の表示ラベル"""
    n = issue["number"]
    lbl = issue.get("label", "")
    if lbl:
        return f"第{n}号（{lbl}）"
    return f"第{n}号"


def build_nav(issues):
    """10号ごとのナビゲーションバーを生成"""
    groups = []
    for start in range(1, len(issues) + 1, 10):
        end = min(start + 9, len(issues))
        if start == end:
            label = f"{start}号"
        else:
            label = f"{start}〜{end}号"
        anchor = f"issue-group-{start}"
        groups.append(f'<a href="#{anchor}">{label}</a>')

    nav_links = "\n    ".join(groups)
    return f"""<nav class="kk-nav" aria-label="号数ナビゲーション">
  <div class="kk-nav-inner">
    {nav_links}
  </div>
</nav>"""


def build_issue_html(issue):
    """1号分のHTMLブロックを生成"""
    n = issue["number"]
    date = issue.get("date", "")
    label = issue_label(issue)
    anchor = f"issue-{n}"

    rows = []
    for section in issue.get("sections", []):
        sec_name = section.get("sectionName", "")
        articles = section.get("articles", [])
        if not articles:
            continue

        for i, article in enumerate(articles):
            title = article.get("title", "")
            author = article.get("author", "")

            # [不明]/[未入力] の表示処理
            title_html = (
                f'<span class="kk-unknown">[未入力]</span>'
                if title in ("[不明]", "[未入力]", "")
                else f'<span class="kk-title">{title}</span>'
            )
            author_html = (
                "" if author in ("[不明]", "[未入力]", "")
                else f'<span class="kk-author">{author}</span>'
            )

            # セクション名は最初の行だけ表示、以降は空セル
            sec_display = sec_name if i == 0 else ""
            sec_cell = f'<td class="kk-section">{sec_display}</td>'

            rows.append(
                f'    <tr>{sec_cell}'
                f'<td class="kk-title-cell">{title_html}</td>'
                f'<td class="kk-author-cell">{author_html}</td></tr>'
            )

    table_body = "\n".join(rows) if rows else '    <tr><td class="kk-section"></td><td colspan="2" class="kk-unknown">[未入力]</td></tr>'

    return f"""<div class="kk-issue" id="{anchor}">
  <h3 class="kk-issue-title">{label}<span class="kk-issue-date">（{date}）</span></h3>
  <table class="kk-table">
    <tbody>
{table_body}
    </tbody>
  </table>
</div>"""


def build_group_section(issues, start, end):
    """10号ごとのグループセクション"""
    group = issues[start - 1 : end]
    group_anchor = f"issue-group-{start}"
    end_actual = group[-1]["number"]
    group_label = f"第{start}号〜第{end_actual}号"

    issues_html = "\n\n".join(build_issue_html(issue) for issue in group)

    return f"""<section class="kk-group" id="{group_anchor}">
  <h2 class="kk-group-title">{group_label}</h2>
  {issues_html}
  <p class="kk-back-to-top"><a href="#kk-database-top">▲ 上に戻る</a></p>
</section>"""


def build_page(issues):
    """ページ全体のHTML（WordPressカスタムHTMLブロック用）"""
    nav = build_nav(issues)

    groups = []
    for start in range(1, len(issues) + 1, 10):
        end = min(start + 9, len(issues))
        groups.append(build_group_section(issues, start, end))

    groups_html = "\n\n".join(groups)

    total = len(issues)
    # データ入力済み件数
    filled = sum(
        1
        for issue in issues
        for section in issue.get("sections", [])
        for article in section.get("articles", [])
        if article.get("title") not in ("[不明]", "[未入力]", "")
    )
    note = f"<!-- 全{total}号掲載 | 入力済み記事: {filled}件 -->"

    return f"""<!-- wp:html -->
<div id="kk-database-top" class="kk-database">

{note}

<h2 class="kk-page-subtitle">創刊号（1977年4月）〜第{total}号</h2>

{nav}

{groups_html}

</div>
<!-- /wp:html -->"""


def build_css():
    """追加CSS（WordPressカスタマイザー or 追加CSSへ貼り付け）"""
    return """.kk-database {
  font-family: "Hiragino Mincho ProN", "Yu Mincho", "MS Mincho", serif;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1em;
}

/* ナビゲーション */
.kk-nav {
  background: #f5f0e8;
  border: 1px solid #c8b89a;
  border-radius: 4px;
  padding: 0.8em 1em;
  margin: 1.5em 0 2em;
}
.kk-nav-inner {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3em 0.6em;
  align-items: center;
}
.kk-nav a {
  color: #5a3e1b;
  text-decoration: none;
  font-size: 0.88em;
  padding: 2px 6px;
  border-radius: 3px;
  white-space: nowrap;
}
.kk-nav a:hover {
  background: #c8b89a;
  color: #2c1a06;
}

/* グループ見出し */
.kk-group-title {
  font-size: 1.1em;
  color: #5a3e1b;
  border-bottom: 2px solid #c8b89a;
  padding-bottom: 4px;
  margin: 2em 0 1em;
}

/* 号見出し */
.kk-issue {
  margin-bottom: 1.8em;
}
.kk-issue-title {
  font-size: 1em;
  font-weight: bold;
  color: #2c1a06;
  background: #f9f5ed;
  border-left: 4px solid #8b6914;
  padding: 4px 10px;
  margin: 0 0 0.3em;
}
.kk-issue-date {
  font-weight: normal;
  font-size: 0.9em;
  color: #666;
}

/* テーブル */
.kk-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9em;
  margin-bottom: 0.5em;
}
.kk-table tr:nth-child(even) {
  background: #faf7f2;
}
.kk-table td {
  padding: 4px 8px;
  border-bottom: 1px solid #e8e0d0;
  vertical-align: top;
}
.kk-section {
  width: 100px;
  color: #8b6914;
  font-size: 0.85em;
  font-weight: bold;
  white-space: nowrap;
}
.kk-title-cell {
  width: auto;
}
.kk-author-cell {
  width: 120px;
  color: #444;
  text-align: right;
  white-space: nowrap;
}
.kk-unknown {
  color: #bbb;
  font-style: italic;
}

/* 上に戻るリンク */
.kk-back-to-top {
  text-align: right;
  font-size: 0.8em;
  margin: 0.3em 0 1em;
}
.kk-back-to-top a {
  color: #8b6914;
  text-decoration: none;
}

/* モバイル対応 */
@media (max-width: 600px) {
  .kk-author-cell {
    width: 80px;
    font-size: 0.82em;
  }
  .kk-section {
    width: 70px;
    font-size: 0.78em;
  }
}
"""


def build_standalone_preview(html_content, css_content, issues):
    """ブラウザで直接開けるスタンドアローンHTMLを生成"""
    total = len(issues)
    # wp:html タグを除去してコンテンツだけ取り出す
    content = html_content.replace("<!-- wp:html -->", "").replace("<!-- /wp:html -->", "")
    return f"""<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>季刊教会誌 総目次（プレビュー）</title>
<style>
body {{
  font-family: "Hiragino Mincho ProN", "Yu Mincho", "MS Mincho", serif;
  background: #fff;
  color: #222;
  margin: 0;
  padding: 20px;
}}
h1.page-title {{
  text-align: center;
  font-size: 1.6em;
  color: #5a3e1b;
  border-bottom: 2px solid #8b6914;
  padding-bottom: 0.5em;
  margin-bottom: 0.5em;
}}
{css_content}
</style>
</head>
<body>
<h1 class="page-title">季刊教会誌 総目次</h1>
{content}
</body>
</html>"""


def main():
    issues = load_issues()
    print(f"Loaded {len(issues)} issues")

    html = build_page(issues)
    css = build_css()

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(html)

    css_file = OUTPUT_FILE.replace(".html", "_style.css")
    with open(css_file, "w", encoding="utf-8") as f:
        f.write(css)

    # スタンドアローンプレビューも生成
    preview_file = OUTPUT_FILE.replace("database_page.html", "preview_standalone.html")
    with open(preview_file, "w", encoding="utf-8") as f:
        f.write(build_standalone_preview(html, css, issues))

    print(f"Generated: {OUTPUT_FILE}")
    print(f"CSS:       {css_file}")
    print(f"Preview:   {preview_file}")

    # 統計
    total_articles = sum(
        len(section.get("articles", []))
        for issue in issues
        for section in issue.get("sections", [])
    )
    filled = sum(
        1
        for issue in issues
        for section in issue.get("sections", [])
        for article in section.get("articles", [])
        if article.get("title") not in ("[不明]", "[未入力]", "")
    )
    print(f"\n統計:")
    print(f"  全号数: {len(issues)}")
    print(f"  全記事数: {total_articles}")
    print(f"  データ入力済み: {filled} 件")
    print(f"  要入力: {total_articles - filled} 件")


if __name__ == "__main__":
    main()
