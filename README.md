- リポジトリをクローン
```git
git clone git@github.com:tanikento/vue_on_docker.git
```

- ディレクトリ移動
```shell
cd vue_on_docker
```

- dockerイメージをビルド & up
```docker
docker-compose up -d --build
```

- コンテナに入る
```docker
docker-compose exec web sh
```

- 新規プロジェクト作成
```docker
vue init webpack
```

- コンフィグのhostを修正(./server/config/index.js)
```js
host: '0.0.0.0'
```

- 更新
```node
npm update
```

- 実行
```node
npm run dev
```
