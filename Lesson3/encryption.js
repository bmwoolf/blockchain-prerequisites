// asymmetric encryption: https://www.youtube.com/watch?v=AQDCe585Lnc
// cryptography in crypto: https://crushcrypto.com/cryptography-in-blockchain/


// hashing: SHA256
// we are essentially just pushing the data through a function that shortens it in an extremely accurate way. We store this value

// important notes about hashing:
// 1. hashes are deterministic, so no matter how many times you give the hash funtion the same input, you will receive the same output
// 2. hashes are irreversible, you cannot determine an input from the output of the hash function (the hash)
// 3. hashes are collision resistent, so if there are the same values that go in and create the same hash value, they are added as a linked list to an array