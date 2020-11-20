---
categories:
   - blog
title: "How to setup Hugo builds with GitHub Actions"
description: "A yml file for quick setup"
summary: "On how to have automatic builds with GitHub Actions for a GitHub Pages hosted Hugo powered static site, like this one."
date: 2020-11-20T03:17:00+01:00
draft: false
---

### How to setup automatic Hugo builds with GitHub Actions

Basic directory structure must be, for GitHub Pages:
```
/
  archetypes
  config.toml
  content
  static
  themes
  # Above dicretories & files are from Hugo
  README.md  # say hi
  .github/workflows/hugo.yml # this is the file down below
```

#### Creating gh-pages branch

```
git checkout -b gh-pages
rm -rf * # dangerous
git add --all
git push --set-upstream origin gh-pages
```

##### hugo.yml

```
name: Hugo builder and deployer

on:
  push:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout
      uses: actions/checkout@v2
      with:
        fetch-depth: 0
        submodules:  true

    - name: Create a worktree
      run: git worktree add -B gh-pages public origin/gh-pages

    - name: Build
      uses: klakegg/actions-hugo@1.0.0

    - name: Commit & Push changes
      run: |
        git config user.name github-actions
        git config user.email github-actions@github.com
        git status
        cd public && git add .
        git commit -m "hugo build, github run id: $GITHUB_RUN_ID"
        git push origin gh-pages
```
