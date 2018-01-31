import open from './open';

export default function openAround(i, j) {
    try {open.call(this, i - 1, j - 1)} catch(e) {};
    try {open.call(this, i - 1, j)} catch(e) {};
    try {open.call(this, i - 1, j + 1)} catch(e) {};
    try {open.call(this, i, j - 1)} catch(e) {};
    try {open.call(this, i, j + 1)} catch(e) {};
    try {open.call(this, i + 1, j - 1)} catch(e) {};
    try {open.call(this, i + 1, j)} catch(e) {};
    try {open.call(this, i + 1, j + 1)} catch(e) {}; 
}
