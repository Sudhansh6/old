import cv2
import numpy as np

img = cv2.imread('pic.jpg',0);
img = cv2.adaptiveThreshold(img, 145, cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
			 cv2.THRESH_BINARY_INV,19,0)
_,img = cv2.threshold(img, 0, 255, cv2.THRESH_BINARY_INV)
img = cv2.erode(img, np.ones((3,3)),1)
cv2.imshow('img',img)
k = cv2.waitKey(0)
if(k==ord('q')):
	cv2.deestroyAllWindows();
