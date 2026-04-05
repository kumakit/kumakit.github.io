# KUMA HEADQUARTERS - Design System (Next-Gen Terminal)

## 🎨 1. Core Principles (Vibe Design)
- **Glassmorphism**: 半透明な背景（`backdrop-filter`）を使用し、奥行きとハイテク感を演出する。
- **Dynamic Glow**: シアンとグリーンを発光させ、システムの状態やインタラクティブ性を視覚化する。
- **Interactive Depth**: ホバー時に要素が少し浮き上がるようなアニメーションを加え、UI に触れている感覚を強調する。

## 🎨 2. Color Palette
| Name               | CSS Variable          | Value (HEX)       | Usage                                |
|--------------------|-----------------------|-------------------|--------------------------------------|
| Background Base    | `--bg-base`           | `#090c10`         | 最背面のベースカラー                 |
| Panel Background   | `--panel-bg`          | `rgba(22, 27, 34, 0.7)` | パネルやカードの半透明背景           |
| Border Normal      | `--border-color`      | `rgba(48, 54, 61, 0.8)` | デフォルトの枠線                     |
| Text Primary       | `--text-primary`      | `#c9d1d9`         | メインテキスト                     |
| Text Secondary     | `--text-secondary`    | `#8b949e`         | サブテキスト、メタデータ             |
| Accent Cyan        | `--accent-cyan`       | `#38bdf8`         | リンク、ホバー時のハイライト         |
| Accent Green       | `--accent-green`      | `#2ea043`         | システムオンライン等のポジティブ状態 |
| Glow Cyan          | `--glow-cyan`         | `rgba(56, 189, 248, 0.5)`| シアンの発光                       |
| Glow Green         | `--glow-green`        | `rgba(46, 160, 67, 0.5)` | グリーンの発光                     |

## 🔤 3. Typography
- **Primary Font**: `'Share Tech Mono', monospace` (見出し、システムメッセージ、ターミナル感の演出)
- **Secondary Font**: `sans-serif` または `system-ui` (通常のテキスト、説明文の可読性向上用)

## 📐 4. Spacing & Borders
- **Border Radius**: `4px` (僅かな丸みを持たせ、完全なレトロからモダンソフトウェア風へ)
- **Panel Padding**: `20px`

## 💫 5. Effects (CSS)
```css
/* Glassmorphism utility */
.glass-panel {
    background: var(--panel-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--border-color);
}
```
