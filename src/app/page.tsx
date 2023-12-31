import { ClipCard } from "@/models/Clip";
import { CollectionCard } from "@/models/Collection/components/CollectionCard";
import { css } from "../../styled-system/css";
import { vstack } from "../../styled-system/patterns";

const sampleTexts = [
  `
## 見出し

テキスト
  `,
  `
この論文は、ホゲホゲ
`,
  `
> 私たちは、ホゲホゲ
> なんでかっていうと、ホゲホゲ

なるほど
`,
];

export default async function Home() {
  return (
    <main
      className={vstack({
        bgColor: "gray.600",
        height: "100dvh",
      })}
    >
      <CollectionCard title="My Collection" count={3} />
      <div
        className={vstack({
          gap: 2,
          width: "100%",
        })}
      >
        {sampleTexts.map((text, i) => (
          <ClipCard key={i} content={text} />
        ))}
        <ClipCard
          content={`
## 見出し

# 見出し1

## 見出し2

### 見出し3

#### 見出し4

##### 見出し5

###### 見出し6

## テキスト

これはテキストです。

これはテキストです。

## テーブル

| 左揃え | 中央揃え | 右揃え |
| :----- | :------: | -----: |
| 1      |    2     |      3 |
| 4      |    5     |      6 |
| 7      |    8     |      9 |

長いテーブル

| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| - | - | - | - | - | - | - | - | - | -- | - | - | - | - | - | - | - | - | - | -- |
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |

## details

<details>
<summary>開く</summary>

開いた

</details>


## 箇条書きリスト

- リスト1
    - ネスト リスト1_1
        - ネスト リスト1_1_1
        - ネスト リスト1_1_2
    - ネスト リスト1_2
- リスト2
- リスト3

## 番号付きリスト

1. 番号付きリスト1
    1. 番号付きリスト1_1
    1. 番号付きリスト1_2
1. 番号付きリスト2
1. 番号付きリスト3

## 引用

> 引用
>
> 引用引用

## 二重引用


> 引用
>
> 引用引用
>> 二重引用
>>
>> 二重引用二重引用
>
> 引用

## code記法

## 強調：&lt;em&gt;

normal *italic* normal

normal _italic_ normal

## 強調：&lt;strong&gt;

normal **bold** normal

normal __bold__ normal

## 強調：&lt;em&gt; + &lt;strong&gt;

normal ***bold*** normal

normal ___bold___ normal

## 水平線

***

___

---

* * *

## リンク

[Google先生](https://www.google.co.jp/)

## 画像

![Google先生](https://www.google.co.jp/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)

## コードブロック

\`\`\`js
console.log("Hello, World!");
\`\`\`


\`\`\`tsx
export const ClipCard: FC<Props> = ({ content }) => {
  const html = markdownToHtml(content);
  console.log(html);

  return (
    <div
      className={css({
        bgColor: "gray.700",
        padding: 3,
        width: "100%",
        color: "gray.100",
      })}
    >
      <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};
\`\`\`

          `}
        />
      </div>
    </main>
  );
}
