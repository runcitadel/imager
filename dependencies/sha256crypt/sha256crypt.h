#ifndef SHA256CRYPT_H
#define SHA256CRYPT_H

extern "C" {

auto
sha256_crypt (const char *key, const char *salt) -> char *;

}

#endif // SHA256CRYPT_H
