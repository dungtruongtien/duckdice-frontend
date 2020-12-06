import styled from 'styled-components';

export const BoardStats = styled.div`
  .tabs-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    .tabs {
      color: #6b7b88;
      padding-right: 0.5rem;
      padding-left: 0.5rem;
      border-bottom: 1px solid #465059;
      cursor: pointer;
    }
    .all-bets-tab {
      color: ${(props) => (props.activeTab === 'allBets' ? '#fff' : '#6b7b88')};
      border-bottom: ${(props) => (props.activeTab === 'allBets' ? '2px solid #f6a623' : '1px solid #465059')};
    }
    .my-bets-tab {
      color: ${(props) => (props.activeTab === 'myBets' ? '#fff' : '#6b7b88')};
      border-bottom: ${(props) => (props.activeTab === 'myBets' ? '2px solid #f6a623' : '1px solid #465059')};
    }
    .high-rollers-tab {
      color: ${(props) => (props.activeTab === 'highRollers' ? '#fff' : '#6b7b88')};
      border-bottom: ${(props) => (props.activeTab === 'highRollers' ? '2px solid #f6a623' : '1px solid #465059')};
    }
    .jackpots-tab {
      color: ${(props) => (props.activeTab === 'jackpots' ? '#fff' : '#6b7b88')};
      border-bottom: ${(props) => (props.activeTab === 'jackpots' ? '2px solid #f6a623' : '1px solid #465059')};
    }
  }
`;
