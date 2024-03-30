import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, FlatList, TouchableOpacity } from 'react-native';

const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswerSelect = (questionIndex, answer) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: answer });
  };

  const handleSubmit = () => {
    // Logic to handle submission, you can access selectedAnswers here
    console.log(selectedAnswers);
  };

  const data = [
    {
      question: 'Where did you play first?',
      answers: ['Tenkasi', 'Trichy', 'Chennai'],
    },
    {
      question: 'What is your favorite color?',
      answers: ['Red', 'Blue', 'Green'],
    },
    {
      question: 'Who is your favorite author?',
      answers: ['Shakespeare', 'Jane Austen', 'J.K. Rowling'],
    },
  ];

  const renderItem = ({ item, index }) => (
    <View style={styles.questionContainer}>
      <Text style={styles.question}>{${index + 1}. ${item.question}}</Text>
      {item.answers.map((answer, answerIndex) => (
        <TouchableHighlight
          key={answerIndex}
          underlayColor="#1273DE"
          style={[
            styles.answer,
            selectedAnswers[index] === answer && styles.selectedAnswer
          ]}
          onPress={() => handleAnswerSelect(index, answer)}
        >
          <Text style={[styles.answerText, selectedAnswers[index] === answer && { color: 'white' }]}>
          {`${String.fromCharCode(97 + answerIndex)}. ${answer}`}
          </Text>
        </TouchableHighlight>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 20,
    marginBottom: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  answer: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  answerText: {
    fontSize: 16,
    color: 'black',
  },
  selectedAnswer: {
    backgroundColor: '#1273DE',
  },
  submitButton: {
    backgroundColor: '#1273DE',
    borderRadius: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: '50%',
    alignSelf: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Quiz;