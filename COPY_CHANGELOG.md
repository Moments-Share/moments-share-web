# コピーライティング修正 対照表

## 1. ダーシ（——）全廃

| ファイル | Before | After |
|---|---|---|
| `CTA.tsx` | 「何から始めればいいかわからない」——それが、最初の一歩です。 | 「何から始めればいいかわからない」。それが、最初の一歩です。 |
| `service-dx/page.tsx` | 「何から始めればいいかわからない」——それが、最初の一歩です。 | 「何から始めればいいかわからない」。それが、最初の一歩です。 |
| `mvv/MVVHero.tsx` | 地域の未来を信じ、企業と人をつなぐ—— | 地域の未来を信じ、企業と人をつなぐ。 |
| `mvv/MVVVision.tsx` | 企業と地域がつながり、挑戦が挑戦を呼ぶ—— | 企業と地域がつながり、挑戦が挑戦を呼ぶ。 |
| `about/AboutVision.tsx` | 挑戦が挑戦を呼ぶ—— | 挑戦が挑戦を呼ぶ。 |
| `about/AboutName.tsx` | 地域が動き始めた日—— | 地域が動き始めた日。 |
| `about/AboutName.tsx` | Moments Share——それが | Moments Share。それが |
| `about/AboutFinalCTA.tsx` | 地域で挑戦したい事業家——あなた | 地域で挑戦したい事業家。あなた |
| `service-produce/page.tsx` | ——その想いを持つ人は多い。 | 。その想いを持つ人は多い。 |
| `sections/Services.tsx` | 働き方図鑑、筋肉祭り、AI研究会—— | 働き方図鑑、筋肉祭り、AI研究会。 |

## 2. 否定→反転構文の整理（サイト全体で2回に絞る）

| ファイル | Before | After |
|---|---|---|
| `Insight.tsx` | うまくつながっていないだけだ。（3連目） | まだつながっていない。（直接的な肯定文） |
| `Insight.tsx` | 眠っているだけだ。（3連目） | 形になるのを、待っている。（肯定文） |
| ※残した2回 | AboutHero.tsx「課題を解決する会社ではありません」<br>Manifesto.tsx「課題を解決する会社ではありません」 | — |

## 3. 特定語彙の置換

| ファイル | Before | After |
|---|---|---|
| `Services.tsx` | すべては挑戦する人を増やすための**装置**です。 | すべては、挑戦する人を増やすための**しくみ**です。 |
| `service-produce/page.tsx` | 地域への愛着を**醸成する**。 | 地域への愛着を**育てる**。 |
| `service-produce/page.tsx` | 人と人のつながりが、**最強のインフラ**です。 | 人と人のつながりが、**いちばん長く残る財産**です。 |

## 4. 論理矛盾の修正

| ファイル | Before | After |
|---|---|---|
| `about/AboutVision.tsx` | 2·4·0=に·し·お。語呂合わせ**ではない**、本気の目標 | 語呂合わせ**から始まった**、本気の目標 |
| `mvv/MVVVision.tsx` | 同上 | 同上 |

## 5. 「眠れない夜」重複解消

| ファイル | Before | After |
|---|---|---|
| `about/AboutOrigin.tsx` | 自社の成長過程でも、**眠れない夜**を何度も経験した。 | 自社の成長過程でも、「成長」とは何か、ずっと問い続けた。（眠れない夜→AboutTeamのみに残す） |

## 6. ボーダレス風「AをBへ」対句の追加（Hero）

| ファイル | Before | After |
|---|---|---|
| `sections/Hero.tsx` | h1テキストのみ | h1の直下に2行追加：<br>「終わらない転記作業を、人にしかできない仕事へ。」<br>「都会に流れていた仕事を、地元で働きたい人の手へ。」 |

## 7. バグ修正

| 項目 | 内容 |
|---|---|
| CountUp 0表示 | MotionValueのchildren渡しからuseState+rAFアニメーションに完全書き換え。SSR時は最終値で静的表示 |
| 「フォームから送る」ボタン | href="#" のボタンをCTA.tsxから削除 |
| OGタグ全ページ共通 | 全ページにopenGraph個別設定を追加（Home/about/news/service-dx/service-bpo/service-produce） |
| About×MVV重複 | AboutMission/Vision/Valuesを削除し、3行サマリー+MVVリンクのAboutMVVSummaryに置換 |

## 8. 新セクション追加

| セクション | 場所 | 内容 |
|---|---|---|
| `ImpactStats` | Home（Services後） | 100社+/90%超/6件 のカウントアップ |
| `AudienceCTA` | Home（ImpactStats後） | 3カード対象者別導線（DX/BPO/地域） |
| `NewsSection` | Home（AboutBridge後） | 最新3件のニュースリスト |
| `/news` ページ | 新規 | 全ニュース一覧ページ |
