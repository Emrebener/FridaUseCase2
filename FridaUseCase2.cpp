#include <iostream>
#include <string>

bool checkCredentials(const std::string& username, const std::string& password) {
	if (username == "Emre" && password == "123") {
		return true;
	}
	return false;
}

void authenticate() {
	std::cout << "\nYou have logged in!" << std::endl;
	std::cout << "Press Enter to exit..." << std::endl;
	std::cin.ignore();
	std::cin.get();
}

int main() {
	std::string username;
	std::string password;

	while (true) {
		std::cout << "Enter username: ";
		std::cin >> username;
		std::cout << "Enter password: ";
		std::cin >> password;

		if (checkCredentials(username, password)) {
			break;
		}
		else {
			std::cout << "Invalid credentials, please try again." << std::endl;
		}
	}

	authenticate();
	return 0;
}