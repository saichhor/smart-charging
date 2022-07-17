#include <iostream>
#include <string>
#include <cpr/cpr.h>

int main(int argc, char** argv) {
    cpr::Response r = cpr::Get(cpr::Url{"https://api.github.com/repos/whoshuu/cpr/contributors"},
                               cpr::Authentication{"user", "pass"});
    std::cout << "Status code: " << r.status_code << '\n';
    std::cout << "Text: " << r.text << '\n';
    return 0;
}