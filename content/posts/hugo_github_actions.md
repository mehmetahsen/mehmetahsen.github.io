---
categories:
   - blog
title: "How to setup Hugo builds with GitHub Actions"
description: "A yml file for quick setup"
summary: "On how to have automatic builds with GitHub Actions for a GitHub Pages hosted Hugo powered static site, like this one."
date: 2020-11-12T23:59:59+01:00
draft: false
---

### How to setup automatic Hugo builds with GitHub Actions

Basic directory structure must be, for GitHub Pages:
```
/
  docs/      # what's actually served/published, can be on / too, but this way it's more tidy. Github currently allows only `/` and `docs/`
  src/       # where we have the source material for hugo to process
  CNAME      # optional for custom domain
  README.md  # say hi
  .github/workflows/hugo.yml # this is the file below

```

##### hugo.yml

```
name: Hugo

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout
      uses: actions/checkout@v2
      with:
        fetch-depth: 0
        submodules:  true

    - name: Build
      uses: klakegg/actions-hugo@1.0.0
      with:
        source: 'src/'
        target: './'

    - name: Commit & Push changes
      run: |
        git config --global user.email "mehmet.ahsen@outlook.com"
        git config --global user.name "Mehmet Ahsen"
        git add docs
        git commit -m "hugo build, github run id: $GITHUB_RUN_ID"; [ $? -eq 1 ]  || exit 0
        git push
```
