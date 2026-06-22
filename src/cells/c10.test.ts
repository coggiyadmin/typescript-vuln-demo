// #10 test-file exclusion — a real sink inside a *.test.ts file. With
// --exclude-tests the finding should be suppressed; without it, it should fire.
// FN/behavior probe (expected MISS today, #67; also verify #85-style flag effect).
import { exec } from 'child_process';

const userInput = process.argv[2]; // SOURCE (stand-in)
exec('echo ' + userInput);         // SINK (CWE-78) — suppressed only with --exclude-tests
