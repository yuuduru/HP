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
    """10号ごとのナビゲーションバーを生成（降順：新しい号が先）"""
    total = len(issues)
    groups = []
    for start in range(1, total + 1, 10):
        end = min(start + 9, total)
        if start == end:
            label = f"{start}号"
        else:
            label = f"{start}〜{end}号"
        anchor = f"issue-group-{start}"
        groups.append(f'<a href="#{anchor}">{label}</a>')

    groups.reverse()  # 降順
    nav_links = "\n    ".join(groups)
    return f"""<nav class="kk-nav" aria-label="号数ナビゲーション">
  <div class="kk-nav-inner">
    {nav_links}
  </div>
</nav>"""


def _is_empty_article(a):
    return (
        a.get("title", "") in ("[不明]", "[未入力]", "")
        and a.get("author", "") in ("[不明]", "[未入力]", "")
    )


def format_section_name(name: str) -> str:
    """長いセクション名は意味のある区切りで改行する"""
    if not name:
        return ""
    # 12文字以上のセクション名のみ対象
    if len(name) < 12:
        return name
    hints = ["リレー黙想", "牧師会講師紹介"]
    for h in hints:
        if h in name and not name.startswith(h):
            return name.replace(h, f"<br>{h}")
    return name


def build_issue_html(issue):
    """1号分のHTMLブロックを生成（セクション名はヘッダー行として独立表示）"""
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

        # 空セクション（セクション名なし＋全記事が空）はスキップ：PDF時代のスケルトン残骸
        if sec_name == "" and all(_is_empty_article(a) for a in articles):
            continue

        # セクションヘッダー行
        if sec_name:
            rows.append(
                f'    <tr class="kk-section-row">'
                f'<th colspan="2" class="kk-section-header">【{sec_name}】</th></tr>'
            )

        for article in articles:
            title = article.get("title", "")
            author = article.get("author", "")

            title_html = (
                f'<span class="kk-unknown">[未入力]</span>'
                if title in ("[不明]", "[未入力]", "")
                else f'<span class="kk-title">{title}</span>'
            )
            author_html = (
                "" if author in ("[不明]", "[未入力]", "")
                else f'<span class="kk-author">{author}</span>'
            )

            rows.append(
                f'    <tr>'
                f'<td class="kk-title-cell">{title_html}</td>'
                f'<td class="kk-author-cell">{author_html}</td></tr>'
            )

    if rows:
        table_body = "\n".join(rows)
        return f"""<div class="kk-issue" id="{anchor}">
  <h3 class="kk-issue-title">{label}<span class="kk-issue-date">（{date}）</span></h3>
  <table class="kk-table">
    <tbody>
{table_body}
    </tbody>
  </table>
</div>"""

    # 未入力号はコンパクト表示（テーブル無し）
    return f"""<div class="kk-issue kk-issue-empty" id="{anchor}">
  <h3 class="kk-issue-title">{label}<span class="kk-issue-date">（{date}）</span><span class="kk-empty-mark">[未入力]</span></h3>
</div>"""


def build_group_section(issues, start, end):
    """10号ごとのグループセクション（各グループ内は降順）"""
    group = issues[start - 1 : end]
    group.reverse()  # グループ内も降順
    group_anchor = f"issue-group-{start}"
    group_label = f"第{start}号〜第{end}号"

    issues_html = "\n\n".join(build_issue_html(issue) for issue in group)

    return f"""<section class="kk-group" id="{group_anchor}">
  <h2 class="kk-group-title">{group_label}</h2>
  {issues_html}
  <p class="kk-back-to-top"><a href="#kk-database-top">▲ 上に戻る</a></p>
</section>"""


def build_page(issues):
    """ページ全体のHTML（WordPressカスタムHTMLブロック用）"""
    nav = build_nav(issues)

    total = len(issues)
    groups = []
    for start in range(1, total + 1, 10):
        end = min(start + 9, total)
        groups.append(build_group_section(issues, start, end))

    groups.reverse()  # グループ自体も降順
    groups_html = "\n\n".join(groups)

    # データ入力済み件数
    filled = sum(
        1
        for issue in issues
        for section in issue.get("sections", [])
        for article in section.get("articles", [])
        if article.get("title") not in ("[不明]", "[未入力]", "")
    )
    note = f"<!-- 全{total}号掲載 | 入力済み記事: {filled}件 -->"

    first_date = issues[0].get("date", "")
    last_date = issues[-1].get("date", "")

    return f"""<!-- wp:html -->
<div id="kk-database-top" class="kk-database">

{note}

<h2 class="kk-page-subtitle">創刊号（{first_date}）〜第{total}号（{last_date}）</h2>

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
.kk-issue-empty {
  margin-bottom: 0.4em;
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
.kk-issue-empty .kk-issue-title {
  border-left-color: #d8cfb8;
  color: #888;
  background: #fafafa;
}
.kk-issue-date {
  font-weight: normal;
  font-size: 0.9em;
  color: #666;
}
.kk-empty-mark {
  font-weight: normal;
  font-size: 0.85em;
  color: #bbb;
  font-style: italic;
  margin-left: 0.6em;
}

/* テーブル */
.kk-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9em;
  margin-bottom: 0.5em;
}
.kk-table td {
  padding: 5px 8px;
  border-bottom: 1px solid #f0eadf;
  vertical-align: top;
  background: #fff;
}
.kk-section-row th {
  background: #f5f0e8;
  text-align: left;
  font-size: 0.9em;
  color: #5a3e1b;
  font-weight: bold;
  padding: 0.5em 10px 0.4em;
  border-bottom: 1px solid #c8b89a;
  border-top: 1px solid #c8b89a;
}
.kk-title-cell {
  width: auto;
  padding-left: 1.6em;
}
.kk-author-cell {
  width: 12em;
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
    width: 8em;
    font-size: 0.82em;
  }
  .kk-title-cell {
    padding-left: 0.8em;
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
