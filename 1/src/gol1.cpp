#include <gtest/gtest.h>
#include "matrix.h"

TEST(game_of_life, matrix) {
	Matrix aMatrix(3, 3);
	//ASSERT_EQ();
	EXPECT_EQ(aMatrix.x, 3);	
	EXPECT_EQ(aMatrix.y, 3);
	EXPECT_EQ(aMatrix.ma.size(), 3);
	for (std::vector< std::vector<bool> >::iterator aItr = aMatrix.ma.begin(); aItr !=aMatrix.ma.end(); ++aItr) {
	EXPECT_EQ(aItr->size(), 3);	
		}

}
TEST(game_of_life, random) {
	Matrix aMatrix(3, 3);
	EXPECT_EQ(aMatrix.x, 3);	
	

}
