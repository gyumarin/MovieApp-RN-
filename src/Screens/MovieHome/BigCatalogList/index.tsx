import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';

import BigCatalog from '~/Components/BigCatalog';

const Container = Styled.View`
    height : 300px;
    margin-bottom : 8px;
`;

interface Props {
  url: string;
  onPress: (id: number) => void;
}

const BigCatalogList = ({url, onPress}: Props) => {
  const [data, setData] = useState<Array<IMovie>>([]);

  useEffect(() => {
    console.log('big카테 진입.');
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(json => {
        console.log('fetch성공');
        setData(json.data.movies);
      })
      .catch(err => {
        console.log('fetch실패');
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <FlatList
        horizontal={true}
        pagingEnabled={true}
        data={data}
        keyExtractor={(item, index) => {
          return `bigScreen-${index}`;
        }}
        renderItem={({item, index}) => (
          <BigCatalog
            id={(item as IMovie).id}
            image={(item as IMovie).large_cover_image}
            year={(item as IMovie).year}
            title={(item as IMovie).title}
            genres={(item as IMovie).genres}
            onPress={onPress}
          />
        )}
      />
    </Container>
  );
};

export default BigCatalogList;
