import assert from 'node:assert/strict';
import {validateRoom} from './room-options.mjs';
for (const rounds of [1,4,8])
  assert.equal(validateRoom({rounds,dealerStart:'two'}).rounds,rounds);
assert.equal(validateRoom({rounds:4,dealerStart:'three'}).dealerStart,'three');
assert.throws(()=>validateRoom(null),TypeError);
assert.throws(()=>validateRoom([]),TypeError);
assert.throws(()=>validateRoom({rounds:4}),TypeError);
assert.throws(()=>validateRoom({rounds:'4',dealerStart:'two'}),RangeError);
assert.throws(()=>validateRoom({rounds:2,dealerStart:'two'}),RangeError);
assert.throws(()=>validateRoom({rounds:4,dealerStart:'four'}),RangeError);
assert.throws(()=>validateRoom({rounds:4,dealerStart:'two',extra:true}),TypeError);
const source={rounds:4,dealerStart:'two'}, result=validateRoom(source);
source.rounds=8;
assert.equal(result.rounds,4);
console.log('12 assertions passed');
