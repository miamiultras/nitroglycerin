import { StyleSheet, Image, ImageSourcePropType, ImageURISource } from "react-native";

interface Props {
  placeholderImageSource: ImageSourcePropType
  selectedImage: ImageURISource
}

export default function ImageViewer({ placeholderImageSource, selectedImage }: Props) {
  const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;

  return <Image source={selectedImage} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: { 
    width: 320, 
    height: 440, 
    borderRadius: 18
  },
});
