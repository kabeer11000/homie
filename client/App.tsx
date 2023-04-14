import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {Image} from 'expo-image';
import {Box, Flex, Text} from "@react-native-material/core";
// import {ChatGPTUnofficialProxyAPI} from 'chatgpt';
import {useEffect, useState} from "react";
import {Asset} from 'expo-asset';
import TypeWriter from 'react-native-typewriter';
import {loadAsync, Renderer} from 'expo-three';
import {ExpoWebGLRenderingContext, GLView} from "expo-gl";

import {AmbientLight, Fog, GridHelper, PerspectiveCamera, PointLight,} from 'three';
//@ts-ignore
// import backgroundImage from "assets/background/home-backgroud.png";
const backgroundImage = Asset.fromModule(require("./src/assets/home-backgroud.png")).uri

export default function App() {
    const [state, setState] = useState(null);

    let timeout;

    useEffect(() => {
        // Clear the animation loop when the component unmounts
        return () => clearTimeout(timeout);
    }, []);
    useEffect(() => {
        fetch('https://docs.cloud.kabeers.network/tests/search/chat-gpt/conversation.php').then(res => res.json()).then(setState);
        // @ts-ignore
        // import("chatgpt").then(({ChatGPTUnofficialProxyAPI}) => {
        //     const api = new ChatGPTUnofficialProxyAPI({
        //         accessToken: "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..2tdL-godYNqIOoFq.DghWtpMDIDDKmI4i7ns28bcPbiLZEl8OpnmuCIxihdhe0_aPdoMF-evykU2qTQ-4DCTbJqogS79FWfxtIiSoKuUdKNouFqiOMZxNyE9DBx0DssbAV4tFqz_sxCJoe3a3utRuXLX-mexbDPOcH4gYE8NgJzM7ItiLyT_8IXaHJoi_B6_D2O7Mot55CkzwysbvpzLXcXMhhQtiUMjHa77BvcAkUJFlm8Q_zXHGrZHTHS7Hv9FyxpLuWoio7U5hqSruVI1V-ZwSRrFHdLQp39Xxd1q7BF6dRgQdiLpJv93feI7hf9OZmfrvHLfDfAVx5K270XQa-99bM5om7iqZRIA5cQNZS6YfXaI9GGil9PdvLhCBnn4gVF5uOsVI9WOzFJis_7as-QvOH64cg1QmB7AkMREgIgeDvG2IHZlgu94kUZnDjrOzW26nzrCAB2FT4uK85sJMZtvkYPm7UpZ-yxtN2is7eUFhHq0HG15x05WiuktI1OeTlI8GI2XtlkYu3FeD9UBSkTJc2OqHQGb2lS94U_imJ_Wt95Zq6I9Yxho_eurR7gL5gsHK4mLuXiMH3giMnPfv24zplbPDWlTvPA4SgNc4zuo-WshUnknWKi_D_y55vX4qEEGwuDQTZx9wRMsWmS08aGTzP2jTsudJud27x9Ue1cFApjyROU4cBnGiIrlWFCsOC-geAqLLQx1_7ZH0SPir8aoishKtkg9zrqYuxoeOcW4xo6nXQDllZpZOJyKOjuOdy_CP0h7kp_sT48YzHcSk6oM21bGVeOQq5139jIeGwW3q1sBhBfQ9cYaE3iVhmt8RVQ4R-q3Cw9gKEIUqNg0Xm6wfk3jpUlxX0xVsYRLC1BKOZglCYuLyqyOl1De6pkKpOgzlsFlESFQ0rumQgAjRxnmprjufJS5chbXwij4ktDPHlCSad8nF1DJGXDjslTY4mRsBxDxBsbiw5nj0KLHQoYxN-xNbFsqwL3FaaARkSVT8iMSSXolKybeLkYACMXPdkWatgnLp0zuxnBun9YxEVKekGKb-5Y54nfATlmSml3oGKa-lyzQh7Vca-zdrETJO_kmySUO3ihp-TbDJZihO47fXIfimqRHXfW2Rg7TKdbKCH-32LMljGRl7UsjO0dY86wViPzTbgtlppEp9OT06hvGHATj0zd4HDu4tYUHr58wqSnMBCv8SwVin7ds2jryqVzoxXSmFQw6ZZrJpZyKcYq8AIm_4EN2sCzy7f55yhTB130ThjOkKQM1u7W8j21NbtkL40-9WGURHlDn9GtTEX7Ix5WOLzOdWzIE7n2K0tgcuaYlK9MH1vPSZuULHxNVXikTxKQgd0LVfBfpXs34guvNhhGXNk5qU2w5oIGpQronvKazJZ8aAEHMbh3tvy2uTyxhnrqM8rv8qpDdff7Je-MmF2V_2C-sUxW1-P4vKFuz7Pzcjn2w2hs5tETMVM7XlibgXfZWSwxkLM-5XHRVE6I6zhk0yaZwa_hExxaj_0Ti10l8lKxY4t1BHc-JmvCAPpwX1dr36wANuhVXQC95vSg1bahGB6mVPGxtPus6NgHELA0OgrKWeomvlOX_PaIbIBiggCzrta3paY55HlE9iwS1dMo7GxRvkJV83J1wa2bYGDWn2_TejE-rQI-KA7lc2sRx89VS_6vOe_Aq58Uax7wvRIHSyzHitZPOiSOLsukemz7f3Fb0LsIITM1f0C7fuSM4VXtXo-kC-gXSC3cV_doOMhE5ZoW7Tpik1z7ZSCyUJoJQA-an2ZbZRo6zjVuU270xlgDJ-u0SKC8U09659NCRUNM6j9CSy2esN4X4lZVSTgBtBsM1jgbTI7pqmKsAmcuk0PW_VEliqtQneYhMo2x_6oek_Dcb-5nmZd8CqtUbpqs-Tof2zDGQEwd4pioIjJv33U0u03OdymDVdJDg0Crxo_dl0kBNEcHgpH_26N_O6Y4OaxJnhB6LSVLEoU8JAWjkcAnauWIulowWInc5-m6arUW177bU0zSvCLcSiTp_HKKvI-sKdtmYvburRNvuzoHKu9CLRp68FA6o3NTLgs2U3EJn59L4BzrVfI_EMYQmL7KO3zwdFwzRkeAGveyWAn0vOoQ_8Qekb0WhLpAuQ7XVXKiV39RrdHW7YtjL3ZWMzY1uDO2msGk7R8GeJ8uZwt7VXEfoGhxB-SXwp6-f2S4sFYFAkX_Cbrgs68Y1cLa0epxHmuQmO91VJ3jzXuhiQP91Kx5Qs_btR__3-obamf9uT0yTDHJYK-hRc5t6TaXOEr7ep-rvi46yQHIJnifbSgDGCxtc4wrLOVFLjLWzAoHzoZHw13U-lm-_CeMBWsaPV8QtumY4kxBmt4p8_DTaE2YFar0U41LyWAubQtXzBfj3990ZQZms53uQgOz11s38QKa5XIoeeKdAZMpjEhldxng4wUTMY1VYq3t-voJiKXu6EB1rvukjXUwhFcqjg_9QhBb3nkamURu51QqUTzZLpOtkTfj91dy8Q84bTXADUBesjHgUAFAjEkJK2ayar-eAGyBhEUg1dmA.Y3Yd9fh5YNgWsvQEvkAkMg",
        //         apiReverseProxyUrl: 'https://gpt.pawan.krd/backend-api/conversation',
        //     });
        //     api.sendMessage('Hello World!').then(console.log);
        //
        // })
    }, [])
    return (
        <ScrollView><Flex fill>
            <Image style={{
                height: Dimensions.get("window").height + 50,
                width: Dimensions.get("window").width + 50,
                flex: 1,
            }} source={{uri: backgroundImage}} blurRadius={0}/>
            <View style={{
                position: 'absolute',
                height: Dimensions.get("window").height,
                width: Dimensions.get("window").width,
                backgroundColor: 'black',
                opacity: 0.7
            }}/>
            <Box pl={15} pr={15} pt={100} style={{position: 'absolute'}}>
                <Box mb={20}>
                    <Text color={'white'} variant="h3">How to get famous on twitter.com</Text>
                    <Text color={'secondary'} variant={'subtitle1'}>Question</Text>
                </Box>
                <View>
                    {!!state && <Text color={'white'} variant="h4"><TypeWriter
                        typing={1}>{state.message.content.parts[0]}</TypeWriter></Text>}
                </View>
                <View style={{height: 1000, width: Dimensions.get("window").width}}>
                    <GLView
                    style={{flex: 1}}
                    onContextCreate={async (gl: ExpoWebGLRenderingContext) => {
                        const {drawingBufferWidth: width, drawingBufferHeight: height} = gl;
                        const sceneColor = 0x6ad6f0;

                        // Create a WebGLRenderer without a DOM element
                        const renderer = new Renderer({gl});
                        //@ts-ignore
                        renderer.setSize(width, height);
                        renderer.setClearColor(sceneColor);

                        const camera = new PerspectiveCamera(70, width / height, 0.01, 1000);
                        camera.position.set(2, 5, 5);
                        // MrWhoopeeClown.obj
                        const resources = {
                            'WMOICE.png': './src/assets/models/mr-woopsie/WMOICE.png',
                            'MrWhoopeeClown.obj': './src/assets/models/mr-woopsie/MrWhoopeeClown.obj',
                            'MrWhoopeeClown.mtl': './src/assets/models/mr-woopsie/MrWhoopeeClown.mtl',
                            'MrWhoopeeClown.dae': './src/assets/models/mr-woopsie/MrWhoopeeClown.dae',
                        }
                        // A THREE.Texture from a static resource.
                        const texture = await loadAsync(require('./src/assets/models/mr-woopsie/WMOICE.png'));
                        const obj = await loadAsync(
                            [require('./src/assets/models/mr-woopsie/MrWhoopeeClown.mtl'), require('./src/assets/models/mr-woopsie/MrWhoopeeClown.obj')],
                            null,
                            imageName => resources[imageName]
                        );
                        const {scene} = await loadAsync(resources["MrWhoopeeClown.dae"]);
                        scene.add(obj);

                        scene.fog = new Fog(sceneColor, 1, 10000);
                        scene.add(new GridHelper(10, 10));

                        const ambientLight = new AmbientLight(0x101010);
                        scene.add(ambientLight);

                        const pointLight = new PointLight(0xffffff, 2, 1000, 1);
                        pointLight.position.set(0, 200, 200);
                        scene.add(pointLight);

                        // Setup an animation loop
                        const render = () => {
                            timeout = requestAnimationFrame(render);
                            renderer.render(scene, camera);
                            gl.endFrameEXP();
                        };
                        render();
                    }}
                />
                </View>

            </Box>
        </Flex>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
