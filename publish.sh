#!/usr/bin/env bash

GIT_USER="${GIT_USER:-"git"}"
TARGET_REPO="${GIT_USER}@github.com:gitops-community/gitops-community.github.io"


set -euo pipefail

unset CD_PATH
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "${SCRIPT_DIR}" || exit 1


mkdir -p dist

vuepress build docs --dest dist

git clone --depth 1 \
	"${TARGET_REPO}"
	publish/

rm -rf publish/*
cp -fa dist/* publish

(
	cd publish
	git add .
	git commit -m 'Update generated manifests'
	git push
)

rm -rf dist
rm -rf publish
