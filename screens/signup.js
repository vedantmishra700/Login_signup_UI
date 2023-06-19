import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



function Signup() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.Middle}>
                <Text style={styles.LoginText}>
                    Signup
                </Text>
            </View>


            <View style={styles.text2}>
                <Text> Already have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.signupText}> Login </Text>
                </TouchableOpacity>
            </View>


            <View style={styles.buttonStyle}>
                <View style={styles.emailInput}>
                    <Input
                        InputLeftElement={
                            <Icon
                                as={<FontAwesome5 name="user-secret" />}
                                size="sm"
                                m={2}
                                _light={{
                                    color: 'black',
                                }}
                                _dark={{
                                    color: "gray.300",
                                }}
                            />
                        }

                        variant="outline"
                        placeholder=" Username "

                        _light={{
                            placeholderTextColor: "blueGray.400"
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50",
                        }}
                    />
                </View>

            </View>

            <View style={styles.buttonStyleX}>

                <View style={styles.emailInput}>
                    <Input
                        InputLeftElement={
                            <Icon
                                as={<MaterialCommunityIcons name="email" />}
                                size="sm"
                                m={2}
                                _light={{
                                    color: "black",
                                }}
                                _dark={{
                                    color: "gray.300",
                                }}
                            />
                        }

                        variant="outline"
                        placeholder='Email' 

                        _light={{
                            placeholderTextColor: "blueGray.400"
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50",
                        }}
                    />
                </View>

            </View>

            <View style={styles.buttonStyleX}>

                <View style={styles.emailInput}>
                    <Input
                        InputLeftElement={
                            <Icon
                                as={<FontAwesome5 name="key" />}
                                size="sm"
                                m={2}
                                _light={{
                                    color: "black",
                                }}
                                _dark={{
                                    color: "gray.300",
                                }}
                            />
                        }

                        variant="outline"
                        secureTextEntry={true}
                        placeholder=" Password "

                        _light={{
                            placeholderTextColor: "blueGray.400"
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50",
                        }}
                    />
                </View>

            </View>

            <View style={styles.buttonStyleX}>

                <View style={styles.emailInput}>
                    <Input
                        InputLeftElement={
                            <Icon
                                as={<FontAwesome5 name="key" />}
                                size="sm"
                                m={2}
                                _light={{
                                    color: "black",
                                }}
                                _dark={{
                                    color: "gray.300",
                                }}
                            />
                        }

                        variant="outline"
                        secureTextEntry={true}
                        placeholder="Re-type Password "

                        _light={{
                            placeholderTextColor: "blueGray.400"
                        }}
                        _dark={{
                            placeholderTextColor: "blueGray.50",
                        }}
                    />
                </View>

            </View>

            <View style={styles.buttonStyle}>
                <Button style={styles.buttonDesign}>
                    REGISTER NOW
                </Button>
            </View>

            <View style={styles.linestyle}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black'}} />
                <View>
                    <Text style={{ width: 50, textAlign: 'center' }}>  Or</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            </View>

            <View style={styles.boxStyle}>
                <Box
                    onPress={() => navigation.navigate('#')}
                    style={{ height: 80, width: 80, marginLeft: 20 }}
                    shadow={3}
                    _light={{
                        backgroundColor: "gray.50",
                    }}

                    _dark={{
                        backgroundColor: "gray.700",
                    }}
                >
                    <AspectRatio ratio={1 / 1}>
                        <Image
                            roundedTop="lg"
                            source={{
                                uri: "https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png"
                            }}

                            alt="image"
                        />

                    </AspectRatio>
                </Box>
                <Box
                    onPress={() => navigation.navigate('#')}
                    style={{ height: 80, width: 80, marginLeft: 20 }}
                    shadow={3}
                    _light={{
                        backgroundColor: "gray.50",
                    }}

                    _dark={{
                        backgroundColor: "gray.700",
                    }}
                >
                    <AspectRatio ratio={1 / 1}>
                        <Image
                            roundedTop="lg"
                            source={{
                                uri: "https://www.transparentpng.com/thumb/facebook-logo-png/photo-facebook-logo-png-hd-25.png"
                            }}

                            alt="image"
                        />

                    </AspectRatio>
                </Box>

                <Box
                    onPress={() => navigation.navigate('#')}
                    style={{ height: 80, width: 80, marginLeft: 20 }}
                    shadow={3}
                    _light={{
                        backgroundColor: "gray.50",
                    }}

                    _dark={{
                        backgroundColor: "gray.700",
                    }}
                >
                    <AspectRatio ratio={1 / 1}>
                        <Image
                            roundedTop="lg"
                            source={{
                                uri: "https://www.transparentpng.com/thumb/twitter/bird-twitter-socialmedia-icons-png-5.png"
                            }}

                            alt="image"
                        />

                    </AspectRatio>
                </Box>

                <Box
                    onPress={() => navigation.navigate('#')}
                    style={{ height: 80, width: 80, marginLeft: 20 }}
                    shadow={3}
                    _light={{
                        backgroundColor: "gray.50",
                    }}

                    _dark={{
                        backgroundColor: "gray.700",
                    }}
                >
                    <AspectRatio ratio={1 / 1}>
                        <Image
                            roundedTop="lg"
                            source={{
                                uri: "https://www.transparentpng.com/thumb/apple-logo/RRgURB-apple-logo-clipart-hd.png"
                            }}

                            alt="image"
                        />

                    </AspectRatio>
                </Box>

            </View>




        </View>
    )
}

export default () => {
    return (
        <NativeBaseProvider>
            <Signup />
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    LoginText: {
        marginTop: 100,
        fontSize: 30,
        fontWeight: 'bold',
    },
    Middle: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    text2: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 5
    },
    signupText: {
        fontWeight: 'bold'
    },
    emailInput: {
        marginTop: 10,
        marginRight: 15,
    },
    buttonStyle: {
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
    },
    buttonStyleX: {
        marginTop: 12,
        marginLeft: 15,
        marginRight: 15,
    },
    buttonDesign: {
        backgroundColor: '#026efd'
    },
    linestyle: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        alignItems: 'center',
    },
    boxStyle: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: "space-around"
    }
})



