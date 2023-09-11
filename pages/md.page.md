# About

The path of this page is `/pages/md.page.md`.

## Task List

- [ ] A
- [x] B
- [*] C


## Table

Headerless
Table header can be eliminated.

|--|--|--|--|--|--|--|--|
|♜|  |♝|♛|♚|♝|♞|♜|
|  |♟|♟|♟|  |♟|♟|♟|
|♟|  |♞|  |  |  |  |  |
|  |♗|  |  |♟|  |  |  |
|  |  |  |  |♙|  |  |  |
|  |  |  |  |  |♘|  |  |
|♙|♙|♙|♙|  |♙|♙|♙|
|♖|♘|♗|♕|♔|  |  |♖|

---

|              |          Grouping           ||
|First Header  | Second Header | Third Header |
| ------------ | :-----------: | -----------: |
|Content       |          *Long Cell*        || \
|Content       |   **Cell**    |         Cell |
|New section   |     More      |         Data |
|And more      | With an escaped '\\|'       ||
|[Prototype table]                          |||

---

|   Markdown   | Rendered HTML |
|--------------|---------------|
|    *Italic*  | *Italic*      | \
|              |               |
|    - Item 1  | - Item 1      | \
|    - Item 2  | - Item 2      |
|    ```python | ```python     | \
|    .1 + .2   | .1 + .2       | \
|    ```       | ```           |

- ``` ^ ^ ``` indicates cells being merged above. `good`

Stage | Direct Products | ATP Yields
----: | --------------: | ---------:
Glycolysis | 2 ATP ||
^^ | 2 NADH | 3--5 ATP |
Pyruvaye oxidation | 2 NADH | 5 ATP |
Citric acid cycle | 2 ATP ||
^^ | 6 NADH | 15 ATP |
^^ | 2 FADH2 | 3 ATP |
**30--32** ATP |||
[Net ATP yields per hexose]

## Code

```js {2-3}
const md = new MarkdownIt()
md.use(Shiki)

const res = md.render(/** ... */)
// console.log(res)

const a = 1
const b = 2
async function sum(a, b) {
  return a + b
}

const aLongString = 'Very long long long long long long long long long long long long long long long long long long string.'

const json = await new Promise()
```

### h3

<div class="h-100"></div>

1

2

3

4

5

6

7

8

9


#### h4
##### h5
###### h6
