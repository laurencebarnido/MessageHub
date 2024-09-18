import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import { Text, View, Image, ScrollView} from 'react-native';
import { Redirect, router,Link} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import  images  from '../constants/images';
import CustomButton from '../components/CustomButton';


export default function App() {
  return (
    <SafeAreaView className = "bg-primary h-full">
      <ScrollView contentContainerStyle = {{height:'100%'}}>
        <View className = "w-full justify-center items-center min-h-[85vh] px-4">
          <Image 
            source={images.text}
            className = "w-[130px] h-[84px] mt-7"
            resizeMode="contain"
          />
           <Image 
            source={images.logo}
            className = "max-2-[380px] w-full h-[200px]"
            resizeMode="contain"
          />

          <TouchableOpacity className='bg-secondary w-[150px] justify-center items-center mt-[150px] rounded-[10px] shadow-sm'>
            <Link href={'sign-in'} className='text-lg font-pblack'>
                SIGN IN</Link>
          </TouchableOpacity>

          <TouchableOpacity className='bg-secondary w-[150px] justify-center items-center mt-5 rounded-[10px] shadow-sm'>
            <Link href={'sign-up'} className='text-lg font-pblack'>
                SIGN UP</Link>
          </TouchableOpacity>


        </View>

      </ScrollView>
      <StatusBar  backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
}

