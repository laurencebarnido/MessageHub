import { View, Text, ScrollView, Image, TextInput} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../constants/images'
import FormField from '../../components/FormField'
import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'


const SignIn = () => {
  return (
    <SafeAreaView className = "bg-black h-full w-full">
       <ScrollView>
          <View className = " w-full justify-center h-full px-4 items-center">
            <Image  
            source={images.logo}
            className = " shadow-lg bg-white w-[200] h-[200] rounded-[77px] justify-center items-center border-white border-2"
           />
           
            <View className="flex justify-center items-center bg-secondary rounded-[10px] w-[300px] h-[600px] mt-10 mx-4 space-y-4">
                <Text className="text-black mb-[1px] text-3xl font-psemibold">Sign Up</Text>
               <View className='bg-black/5 p-5 rounded-2xl w-[250px]'>
                    <TextInput
                      placeholder='Email'
                      placeholderTextColor={'white'}
                    />
               </View>

               <View className='bg-black/5 p-5 rounded-2xl w-[250px] mb-[20px]'>
                    <TextInput
                      placeholder='Username'
                      placeholderTextColor={'white'}  
                    />
                 </View>

                 <View className='bg-black/5 p-5 rounded-2xl w-[250px] mb-[20px]'>
                    <TextInput
                      placeholder='Contact Number'
                      placeholderTextColor={'white'}  
                    />
                 </View>

                 <View className='bg-black/5 p-5 rounded-2xl w-[250px] mb-[20px]'>
                    <TextInput
                      placeholder='Password'
                      placeholderTextColor={'white'}  
                    />
                 </View>

                 <View className='bg-black/5 p-5 rounded-2xl w-[250px] mb-[20px]'>
                    <TextInput
                      placeholder='Confirm Password'
                      placeholderTextColor={'white'}  
                    />
                 </View>

                 

                 <TouchableOpacity className='bg-black w-[150px] justify-center items-center mt-[150px] rounded-[10px] shadow-sm'>
                   <Link href='sign-in' className='text-lg font-pblack text-white'>Sign Up</Link>
                 </TouchableOpacity>
                
                </View>

                


          </View>
       </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn