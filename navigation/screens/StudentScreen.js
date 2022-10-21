import * as React from 'react'
import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function StudentScreen({ navigation }) {

    console.log('break')
    const [students, setStudents] = useState([])
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '1rem'
        }
        
     })

    useEffect(() => {
        fetch('http://localhost:3000/students')
        .then((res) => console.log(res))
        .catch((error) => console.log(error)) 
        
        // const fetchStudents = async () => {
        //     let req = await fetch('http://localhost:3000/students')
        //     let res = await req.json()
        //         console.log(res)
        //         setStudents(res)
           
        // }
        // fetchStudents()


        // .then(data => console.log(data))
        // console.log(students)
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justiftContent: 'center' }}>

        {students?.map((student) => {
            <View style={styles.container}>
                <Image
                source={require('../img/person.jpeg')}
                />
                <Text>
                    {student.first_name}
                    {student.last_name}
                    {student.occuptation}
                </Text>
            </View>

        })}
  
            {/* <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold ' }}>
                Students
            </Text> */}


        </View>
    )

}