import React, {useCallback, useMemo, useState} from 'react';
import {FlatList, StatusBar} from 'react-native';
import {useTheme} from 'styled-components/native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import {RFValue} from '../../utils/RFValue';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Task, {TaskType} from '../../components/Task';
import Total from '../../components/Total';
import ModalAlert from '../../components/ModalAlert';
import * as S from './styles';

const Home: React.FC = () => {
  const theme = useTheme();

  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState<TaskType[]>([] as TaskType[]);
  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalInvalidTask, setShowModalInvalidTask] = useState(false);

  const handleAddNewTask = useCallback((taskDescription: string) => {
    if (!taskDescription.replace(/\s/g, '')) {
      setShowModalInvalidTask(true);
      return;
    }

    setTasks((prevState) => [
      ...prevState,
      {id: uuidv4(), description: taskDescription, done: false},
    ]);
    setDescription('');
  }, []);

  const handleToggleDone = useCallback((task: TaskType) => {
    setTasks((prevState) =>
      prevState.map((item) => {
        if (item === task) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      })
    );
  }, []);

  const handleDelete = useCallback((task: TaskType) => {
    setSelectedTask(task);
    setShowModalDelete(true);
  }, []);

  const onConfirmDelete = useCallback((task: TaskType) => {
    setTasks((prevState) => prevState.filter((item) => item !== task));
    setShowModalDelete(false);
  }, []);

  const onCancelDelete = useCallback(() => {
    setSelectedTask(null);
    setShowModalDelete(false);
  }, []);

  return (
    <S.Container>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={theme.colors.base.gray700}
      />

      <Header />

      <S.WrapperInput>
        <Input
          value={description}
          onChangeText={setDescription}
          handlePressAdd={() => handleAddNewTask(description)}
        />
      </S.WrapperInput>

      <S.WrapperTotals>
        <Total
          label="Created"
          value={tasks.length}
          textColor={theme.colors.product.blue}
        />

        <Total
          label="Completed"
          value={tasks.filter((task) => task.done).length}
          textColor={theme.colors.product.purple}
        />
      </S.WrapperTotals>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingHorizontal: RFValue(24),
          paddingBottom: RFValue(24),
        }}
        renderItem={({item}: {item: TaskType}) => (
          <Task
            task={item}
            handleToggleDone={() => handleToggleDone(item)}
            handleDelete={() => handleDelete(item)}
          />
        )}
        ListEmptyComponent={() => (
          <S.EmptyListContainer>
            <S.EmptyListDivisor />

            <S.EmptyListClipboard
              source={require('../../../assets/clipboard.png')}
            />

            <S.EmptyListTitle bold>
              You don't have any tasks yet
            </S.EmptyListTitle>

            <S.EmptyListTitle>
              Create tasks and organize your to-do items
            </S.EmptyListTitle>
          </S.EmptyListContainer>
        )}
      />

      <ModalAlert
        visible={showModalDelete}
        handleConfirm={() => {
          if (selectedTask) {
            onConfirmDelete(selectedTask);
          }
        }}
        handleClose={onCancelDelete}
        data={{
          title: 'Remove',
          subtitle: 'Are you sure you want to remove this task?',
          confirmText: 'Yes',
          cancelText: 'No',
        }}
      />

      <ModalAlert
        visible={showModalInvalidTask}
        handleConfirm={() => setShowModalInvalidTask(false)}
        handleClose={() => setShowModalInvalidTask(false)}
        data={{
          title: 'Invalid task',
          subtitle: 'Task description cannot be empty.',
          confirmText: 'Ok',
        }}
      />
    </S.Container>
  );
};

export default Home;
