import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList,Dimensions,TouchableOpacity,Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { height, width } = Dimensions.get('window');
import { Icon } from 'react-native-elements'

export default class DetailScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             item:this.props.route.params.item
        }
    }
    
    render() {
        const {item}=this.state
        return (
            <View style={{flex:1}}>
                <View style={{width: width, padding: width/30, flexDirection: 'row',borderBottomWidth:1}}>
                    <View style={{width:height/30,justifyContent:'center',alignItems:'center',}}>
                    <Icon name="arrow-left"  type="material-community" size={height/25}  color="#1CBBB4" />
                    </View>
                    <Text style={{ fontSize: height / 45, fontWeight: '700', flex: 1, color:"#1CBBB4",textAlign: 'center'}}>{item.name}</Text>
                    <View style={{width:height/30,}}></View>
                </View>
                <View style={{flex:3.2,}}>
                <View style={{flex:1}}>
                <View style={{flex:8}}>
                <View style={{flex:1,flexDirection:'row',marginVertical:height/40}}>

                <View style={{marginLeft:width/30}}>
                <View style={{height: 55, width: 55, borderRadius: 55 / 2, justifyContent: 'center', alignItems: 'center',borderWidth:1,borderColor:'#1CBBB4'}}>
                         <Icon name='user'  type='antdesign'  color={"black"} size={height / 30}  />
                        </View>
                        </View>
                        <View style={{marginHorizontal:width/30,flex:1}}>
                        <Text style={{fontWeight:'bold',fontSize:height/44}}>{item.title}</Text>
                        <Text style={{marginTop:height/200, fontWeight:'bold',fontSize:height/44}}>MBBS,DNB (General Medicine) ,DM-Cardiology,MBBS</Text>
                        <Text style={{fontWeight:'bold',fontSize:height/48,color:'grey'}}>10 Years Experience</Text>
                        <Text style={{marginTop:height/200,fontSize:height/48,color:"grey"}}>Reg No:<Text style={{color:"black"}}> JRD35678</Text></Text>

                        </View>

                        <View style={{marginRight:width/30, height: hp('5%'), width: wp('25%'), borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor:'#900' }}><Text style={{color:'#900'}}>CALL</Text></View>

                        </View>

                </View>
                <View style={{flex:2,}}>
                <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:5,justifyContent:'center',alignItems:'center',borderBottomWidth:2,borderBottomColor:"#1CBBB4"}}>
                    <Text style={{color:"#1CBBB4",fontSize:height/45}}>CLINIC SERVICES</Text>
                </View>
                <View style={{flex:5,justifyContent:'center',alignItems:'center',borderBottomWidth:1,borderBottomColor:"grey"}}>
                    <Text style={{color:"grey",fontSize:height/45}}>ONLINE CONSULT</Text>
                </View>

                </View>

                </View>

                </View>

                </View>
                <View style={{flex:6,width:width}}>
                    <View style={{flex:1,flexDirection:'row',marginVertical:height/40}}>
                        <View style={{marginHorizontal:width/20}}>
                        <Icon name="hospital-building"  type="material-community" size={height/20}  color="#1CBBB4" />

                        </View>
                        <View style={{marginRight:width/20,flex:1}}>
                         <Text style={{fontSize:height/35,color:"grey",fontWeight:'bold'}}>DR RAM'S CLINIC & LAB</Text>
                        <View  style={{marginTop:height/70,flexDirection:'row',justifyContent:'space-between'}}>
                            <Text style={{fontSize:height/48,fontWeight:'bold'}}>TODAY'S TIMING</Text>
                            <Text style={{fontSize:height/48,color:"#1CBBB4"}}>VIEW ALL TIMING</Text>
                        </View>
                        <Text style={{marginTop:height/70,fontSize:height/48,}}>06:00 AM - 11-56 PM</Text>
                        <Text style={{marginTop:height/70,fontSize:height/42,color:"grey"}}>Consultation Charge:<Text style={{color:"black"}}> ₹ 0.0</Text></Text>
                        <Text style={{fontSize:height/42,color:"grey"}}>Contact:<Text style={{color:"black"}}> 888888888,898989889</Text></Text>
                         
                         <TouchableOpacity style={{marginTop:height/70,paddingVertical:height/80,backgroundColor:'#1CBBB4',width:width/3,borderRadius:height/150,justifyContent:'center',alignItems:'center'}}>
                             <Text style={{color:"white"}}>BOOK NOW</Text>
                         </TouchableOpacity>
                         <Text style={{ marginTop:height/70,fontSize:height/48,fontWeight:'bold'}}>912,9TH FLOOR, TOWER-B, ADVANT NAVIS BUSSINESS PARK, SECTOR 137, NOIDA, UTTAR PARDESH</Text>
                         <View style={{marginTop:height/70,}}>
                         <Image
                       source={require("../../assets/map.jpg")}
                       style={{height:height/8,width:width/1.5}}
                       />

                         </View>
                        </View>

                    </View>
                </View>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: hp('100%'),
      width: wp('100%')
    },
    header: {
      height: hp('8%'),
      width: wp('100%'),
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      borderBottomWidth: 0.5,
    },
    flatList: {
      height: hp('92%'),
      width: wp('100%'),
  
    },
    itemList: {
      height: hp('18%'),
      width: wp('100%'),
      // backgroundColor: 'blue',
      marginTop: "0.2%",
    }
  
  })
  
  
  
  
  