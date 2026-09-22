const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj);

const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res);

//Import Library React Native
import react, { useState } from "react";

//Import Component React Native
import { View, Text, Button, TextInput, FlatList, Image, ScrollView, TouchableOpacity, Pressable, Switch, Modal, ActivityIndicator, SafeAreaViewBase, StyleSheet, Alert, Platform, SectionList, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Halo, Dunia!</Text>
    </View>
  );
}

  const go = (f, seed, acc) => {
    const res = f(seed);
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])


const PROFILE = {
  name: "Noval Adrian",
  Title: "Fullstack Mobile Developer",
  email: "novaladrian@mail.uinssc.ac.id",
  phone: "0895330974814",
  Location: "Cirebon, Indonesia",
  Bio: "I am a Fullstack Mobile Developer with experience in building cross-platform mobile applications using React Native. I have a strong passion for creating user-friendly and efficient mobile apps that provide seamless experiences for users.",
  Avatar: "https://lh3.googleusercontent.com/a/ACg8ocJCljVENlCU5t9ifthp48fKQFIGUwDiQhbw32GWBBNM-Pm1jr4=s400-c",
};

const SKILL = [
  { id: 1, name: "React Native", level: "80", color: "#61dafb" },
  { id: 2, name: "JavaScript", level: "80", color: "#f7df1e" },
  { id: 3, name: "Node.js", level: "70", color: "#68a063" },
  { id: 4, name: "Python", level: "90", color: "#3776ab" },
  { id: 5, name: "Java", level: "85", color: "#b07219" },
  { id: 6, name: "PHP", level: "90", color: "#4F5D95" },
];

const SECTION = [
  {
    title: "Education",
    data: [
      {
        id: "s1",
        Role: "S1 Informatika",
        institution: "UIN Siber Syekh Nurjati Cirebon (UINSSC)",
        period: "2024-2028",
        desc: "IPK 3.95/4.00, Cumlaude",
      },
    ],
  },
];

const SOCIAL = [
  { id: "sc1", label: "Github", icon: "💼", url: "https://github.com/novaladriann" },
  { id: "sc2", label: "Instagram", icon: "📸", url: "https://www.instagram.com/novaldrian_/" },
];

const SkillCard = ({ item }) => {
  <View style={[styles.skillCard, { backgroundColor: item.color }]}>
    <Text style={styles.skillName}>{item.name}</Text>
    <Text style={styles.skillLevel}>{item.level}%</Text>
  </View>;
};
