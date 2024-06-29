import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import images from "../../constant/images.js";
const CourseContent = () => {
  return (
    <View style={styles.container}>
      <Image source={images.img1} style={styles.image1} />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Your Course"
        />
        <TouchableOpacity style={styles.filterIcon}>
          <Text style={styles.filterText}>≡</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.allCoursesText}>All course</Text>
      <View style={styles.coursesContainer}>
        <View style={styles.courseCard}>
          <View style={styles.left}>
            <Image source={images.img1} style={styles.courseImage} />
          </View>

          <View style={styles.right}>
            <Text style={styles.courseTitle}>SPJIMR</Text>
            <Text style={styles.courseDescription}>MBA</Text>
            <Text style={styles.courseText}>
              An MBA course opted
            </Text>
            <View style={styles.actionBtn}>
            <Text style={styles.viewDetails}>
              View Details
            </Text>  
            <Text style={styles.buyNow}>
              Buy Now
            </Text>  
            </View>
          </View>
        </View>
        <View style={styles.courseCard}>
          <View style={styles.left}>
            <Image source={images.img1} style={styles.courseImage} />
          </View>

          <View style={styles.right}>
            <Text style={styles.courseTitle}>SPJIMR</Text>
            <Text style={styles.courseDescription}>MBA</Text>
            <Text style={styles.courseText}>
              An MBA course opted
            </Text>
            <View style={styles.actionBtn}>
            <Text style={styles.viewDetails}>
              View Details
            </Text>  
            <Text style={styles.buyNow}>
              Buy Now
            </Text>  
            </View>
          </View>
        </View>
        <View style={styles.courseCard}>
          <View style={styles.left}>
            <Image source={images.img1} style={styles.courseImage} />
          </View>

          <View style={styles.right}>
            <Text style={styles.courseTitle}>SPJIMR</Text>
            <Text style={styles.courseDescription}>MBA</Text>
            <Text style={styles.courseText}>
              An MBA course opted
            </Text>
            <View style={styles.actionBtn}>
            <Text style={styles.viewDetails}>
              View Details
            </Text>  
            <Text style={styles.buyNow}>
              Buy Now
            </Text>  
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
  image1: {
    width: "300px",
    height: 170,
    marginTop: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 40,
    marginTop: 20,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  filterIcon: {
    marginLeft: 10,
  },
  filterText: {
    fontSize: 20,
    color:'#007bff'
  },
  allCoursesText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 10,
    paddingHorizontal: 30,
  },
  coursesContainer: {
    paddingHorizontal:40,

  },
  courseCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    display:'flex',
    flexDirection:'row',
    gap:10,
    width:320
  },
  courseImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  courseDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  courseText: {
    fontSize: 14,
    marginBottom: 10,
  },
  courseButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  courseButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  courseButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  actionBtn:{
    display:'flex',
    flexDirection:'row',
    gap:20
  },
  viewDetails:{
    color:'#007bff'
  },
  buyNow:{
    color:'red'
  }
});

export default CourseContent;
