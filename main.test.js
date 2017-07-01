'use strict';

import test from 'ava';
function getAuthorName(){
  return "venkatesh mamidipalli";
}

test("getAuthorName returns venkatesh mamidipalli",t=>{
  t.is(getAuthorName(),'venkatesh mamidipalli');
});
