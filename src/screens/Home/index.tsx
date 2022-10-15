import React, {useState} from 'react';
import {FlatList, StatusBar} from 'react-native';
import {useTheme} from 'styled-components/native';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Task, {TaskType} from '../../components/Task';
import Total from '../../components/Total';
import * as S from './styles';

const tasks = [
  {
    id: 'd45fs5df5s1df5sf',
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper.',
    done: false,
  },
  {
    id: 's6df54s1d5f1sd65',
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper.',
    done: false,
  },
  {
    id: '54dsf1s5d1f54sf',
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper.',
    done: false,
  },
  {
    id: 'fsd1fs54d1f5sdf',
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper.',
    done: true,
  },
  {
    id: 's54fs45df54f41s',
    description:
      'Integer urna interdum massa libero auctor neque turpis turpis semper.',
    done: true,
  },
];

const Home: React.FC = () => {
  const theme = useTheme();
  const [taskDescription, setTaskDescription] = useState('');

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
          value={taskDescription}
          onChangeText={setTaskDescription}
          handlePressAdd={() => console.log('Pressed')}
        />
      </S.WrapperInput>

      <S.Content>
        <S.WrapperTotals>
          <Total
            label="Criadas"
            value={tasks.length}
            textColor={theme.colors.product.blue}
          />

          <Total
            label="Concluídas"
            value={tasks.filter((task) => task.done).length}
            textColor={theme.colors.product.purple}
          />
        </S.WrapperTotals>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({item}: {item: TaskType}) => <Task task={item} />}
          ListEmptyComponent={() => (
            <S.EmptyListContainer>
              <S.EmptyListDivisor />

              <S.EmptyListClipboard
                source={require('../../../assets/clipboard.png')}
              />

              <S.EmptyListTitle bold>
                Você ainda não tem tarefas cadastradas
              </S.EmptyListTitle>

              <S.EmptyListTitle>
                Crie tarefas e organize seus itens a fazer
              </S.EmptyListTitle>
            </S.EmptyListContainer>
          )}
        />
      </S.Content>
    </S.Container>
  );
};

export default Home;
