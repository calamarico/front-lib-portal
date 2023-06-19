import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { AppDispatch } from '../../app/store';
import { fetchSearch } from '../../redux/booksReducer';
import * as Styles from './styles';

const Search = () => {
  const dispatch: AppDispatch = useAppDispatch();
  // const agents = useSelector(sabinaAgentsComplete);
  // const allTeams = useSelector(teamsSelector);
  // const isLoading = useSelector(getIsLoading);
  // const [agent, setAgent] = useState();
  // const [view, setView] = useState(sectionStates.singleProfileView);

  // useEffect(() => {
  //   dispatch(fetchSearch('the lord of the rings'));
  // }, []);

  // useEffect(() => {
  //   dispatch(fetchAccountParams());
  // }, []);

  // useEffect(() => {
  //   dispatch(fetchAccountTeams());
  // }, []);

  // const handleChangeAgents = agentNew => {
  //   dispatch(patchAgents(agentNew));
  // };

  const handleSearch = (text: string) => {
    if (text && text.length > 3) {
      dispatch(fetchSearch(text));
    }
  };

  // useEffect(() => {
  //   if (agents && agents.length > 0) {
  //     setAgent(agents?.find(({ username }) => username === agentUsername));
  //   }
  // }, [agents]);

  // if (isLoading || !agent || !allTeams) {
  //   return <Spinner width={60} height={60} color="#02cd55" justify="center" align="center" />;
  // }

  return (
    <Styles.SearchContainer>
      <Styles.SearchInput
        type="search"
        placeholder='Search...'
        onChange={(e) => handleSearch(e.target.value)}>
      </Styles.SearchInput>
    </Styles.SearchContainer>
  );
};

export default Search;