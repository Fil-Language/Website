# Installation

Here is how to install the compiler on your own computer :

- [Linux / MacOS](#linux--macos)
- [Windows](#windows)

## Linux / MacOS

First you need to install [LLVM](https://llvm.org/). Then follow these commands :

```sh
# Clone the repository
git clone https://github.com/Fil-Language/Filc.git
# Go inside
cd Filc
# Configure CMake
cmake -B ./build -DCMAKE_BUILD_TYPE=Release
# Build
cmake --build ./build
# Go in build folder
cd build
# Install the compiler
sudo make install
```

## Windows

First you need to install [LLVM](https://llvm.org). Make sure that `cmake` variables are up to date. Then follow these commands :

```sh
# Clone the repository
git clone https://github.com/Fil-Language/Filc.git
# Go inside
cd Filc
# Configure CMake
cmake -B .\build -DCMAKE_BUILD_TYPE=Release
# Build
cmake --build .\build
```

In `build` folder you will find the compiler `filc.exe`.