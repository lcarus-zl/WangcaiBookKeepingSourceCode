#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . && 
git commit -m '消除支出不能默认选中、添加点击统计修改备注功能' && 
git remote add origin git@gitee.com:keath_zl/wangcai-bookkeeping.git && 
git push -u origin master -f 
cd -