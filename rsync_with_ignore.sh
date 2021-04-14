#!/bin/bash

set -x
set -e

if [ $# -ne 2 ]; then
    echo "Usage: $0 <src_dir> <tgt_dir>"
    exit 1
fi

src_dir=$1
shift

tgt_dir=$1
shift

ignore_files="CNAME LICENSE README.md .gitignore"
for ignore_file in $ignore_files;
do
    if [ ! -f $ignore_file ]; then
        $ignore_file does not exist.
        exit 1
    fi
done

if [ ! -d $src_dir ]; then
    echo $src_dir is not a direcory.
    exit 1
fi

if [ ! -d $tgt_dir ];then
    echo $tgt_dir is not a direcory.
    exit 1
fi

tmp_dir=$(mktemp -d)
cp $0 $tmp_dir
cp $ignore_files $tmp_dir

rm -rf $tgt_dir/*
cp -r $src_dir/* $tgt_dir
cp $tmp_dir/* $tgt_dir

rm -rf $tmp_dir
echo Done successfully

