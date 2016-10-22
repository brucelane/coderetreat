#include <rand.h>

class Matrix {
public:
	Matrix(int x, int y):x(x), y(y) {
		ma.resize(x);
		for (std::vector< std::vector<bool> >::iterator aItr = ma.begin(); aItr !=ma.end(); ++aItr) {
			aItr->resize(y);
		}
	}
	int x;
	int y;
	std::vector< std::vector<bool> > ma;
	void generate() {
		
	}
};
