#!/bin/bash

tree_output=$(tree -I 'node_modules|coverage')
echo "$tree_output" >> project-structure.md