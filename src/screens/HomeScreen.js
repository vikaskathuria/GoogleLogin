



import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList,Dimensions,TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { height, width } = Dimensions.get('window');
import { Icon } from 'react-native-elements'
const DATA = [
  {
    id: '1',
    name: 'Dr.Biresh bikram Singh',
    title: 'Dermatologist',
    post: 'MBBS',
    post1: 'MBBS',
    post2: 'DNB(General'

  },
  {
    id: '2',
    name: 'Dr.Anuj Sharma',
    title: 'Gastroenterologist',
    post: 'BAMS',
    post1: 'DNB',
    post2: 'MDS'

  },
  {
    id: '3',
    name: 'Dr.Neha Tyagi',
    title: 'Cardiac Electrophysiologist',
    post: 'BPT',
    post1: 'DDW22777',
    post2: ''
  },
  {
    id: '4',
    name: 'Dr.Gagandeep',
    title: '',
    post: '',
    post1: '',
    post2: ''
  },
  {
    id: '5',
    name: 'Dr.Shubham Kumar',
    title: 'Gastroenterologist',
    post: '',
    post1: '',
    post2: ''
  },
  {
    id: '6',
    name: 'Dr.Shubham Kumar',
    title: 'Gastroenterologist',
    post: '',
    post1: '',
    post2: ''
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ marginLeft: '2%' }}>
          <Icon name="arrow-left"  type="material-community" size={20}  color="#1CBBB4" />

          </View>
          <View style={{ marginRight: '40%' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16,color:'#1CBBB4' }}>My Doctor(s)</Text>

          </View>

        </View>
        <View style={styles.flatList}>
          <FlatList
            data={DATA}
            renderItem={({ item }) =>
              <TouchableOpacity style={styles.itemList} 
              onPress={()=>this.props.navigation.navigate("Detail",{item:item})}>
                <View style={{ height: hp('20%'), width: wp('100%'), }}>
                  <View>

                    <View style={{ height: hp('15%'), width: wp('100%'), justifyContent: 'space-between', flexDirection: 'row', marginTop: '3%' }}>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{
                          height: 55, width: 55, borderRadius: 55 / 2,  marginLeft: '2%',
                          justifyContent: 'center', alignItems: 'center',borderWidth:1,borderColor:'#1CBBB4'
                        }}>
                         <Icon name='user'  type='antdesign'  color={"black"} size={height / 30}  />

                        </View>
                        <View style={{ marginLeft: '2%',height:hp('15%'),justifyContent:'space-around' }}>
                          <Text style={{fontWeight:'bold'}}>{item.name}</Text>
                          <Text style={{  }}>{item.title}</Text>
                          <View style={{ flexDirection: 'row'}}>
                            <Text style={{fontWeight:'bold'}}>{item.post}</Text>
                            <Text style={{paddingLeft:5,fontWeight:'bold'}}>{item.post1}</Text>
                            <Text style={{paddingLeft:5,fontWeight:'bold'}}>{item.post2}</Text>
                          </View>
                          <View style={{flexDirection:'row'}}>
                          <View style={{marginLeft:5,flexDirection:'row'}}>
                            <Icon name="message1" type="antdesign" size={20} color="grey" />
                              <Text> 3</Text>
                              </View>
                            <View style={{marginLeft:5,flexDirection:'row'}}>
                            <Icon name="call-outline" type="ionicon" size={20} color="grey" />
                              <Text> 3</Text>
                              </View>
                              <View style={{marginLeft:5,flexDirection:'row'}}>
                            <Icon name="videocam-outline" type="ionicon" size={20} color="grey" />
                              <Text> 3</Text>
                              </View>
                              <View style={{marginLeft:5,flexDirection:'row'}}>
                            <Icon name="clipboard-notes" type="foundation" size={20} color="grey" />
                              <Text> 3</Text>
                              </View>
                              <View style={{marginLeft:5,flexDirection:'row'}}>
                            <Icon name="bells" size={20} type="antdesign" size={20} color="grey"/>
                              <Text> 3</Text>
                              </View>
                          </View>

                        </View>

                      </View>
                      <View style={{ height: hp('5%'), width: wp('25%'), borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginRight: 10,borderColor:'#900' }}><Text style={{color:'#900'}}>Emergency</Text></View>


                    </View>
                  </View>
                </View>



              </TouchableOpacity>
            }
          />
         

        </View>
        <TouchableOpacity 
        onPress={()=>this.props.navigation.navigate("Profile")}
        style={{height:40,width:40,borderRadius:40/2,backgroundColor:'#1CBBB4',justifyContent:'center',alignItems:'center',
          position:'absolute',bottom:10,left:'45%'}}>
            <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>+</Text>

          </TouchableOpacity>
      </View>
    );
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
    borderBottomWidth: 1
  }

})




