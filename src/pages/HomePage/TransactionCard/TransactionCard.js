import {
  ColorSign,
  StyledButtonDelete,
  StyledCard,
  StyledCategory,
  StyledComment,
  StyledListCard,
  StyledPencil,
  StyledPencilEdit,
  StyledSpan,
  StyledText,
  StyledTypeOfField,
  StyledWrapperButtons,
} from './TransactionCard.styled';

const formatDate = date => {
  const d = new Date(date);
  const day = d.getDate().toString().padStart(2, '0');
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const year = d.getFullYear();
  return `${day}.${month}.${year}`;
};

export const TransactionCard = ({
  transactions,
  handleEditClick,
  deleteTransactions,
}) => {
  return (
    <StyledListCard>
      {transactions.map(
        ({ createdAt, type, category, comment, value, _id }) => {
          const date = formatDate(createdAt);
          const numberSign = type === 'expense' ? '-' : '+';

          return (
            <StyledCard key={_id} type={type}>
              <ul>
                <StyledTypeOfField>
                  <StyledText>Date</StyledText>
                  <StyledSpan>{date}</StyledSpan>
                </StyledTypeOfField>
                <StyledTypeOfField>
                  <StyledText>Type</StyledText>
                  <ColorSign type={type}>{numberSign}</ColorSign>
                </StyledTypeOfField>
                <StyledTypeOfField>
                <StyledText>Category</StyledText>
                <StyledCategory type={type}>
                  {type === 'income' ? 'Income' : category}
                </StyledCategory>
                </StyledTypeOfField>
                <StyledTypeOfField>
                  <StyledText>Comment</StyledText>
                  <StyledComment>{comment}</StyledComment>
                </StyledTypeOfField>
                <StyledTypeOfField>
                  <StyledText>Sum</StyledText>
                  <ColorSign type={type}>{value}</ColorSign>
                </StyledTypeOfField>
                <StyledWrapperButtons>
                  <li>
                    <StyledButtonDelete
                      onClick={() => {
                        deleteTransactions(_id);
                      }}
                    >
                      Delete
                    </StyledButtonDelete>
                  </li>
                  <StyledPencilEdit>
                    <StyledPencil onClick={() => handleEditClick(_id)} />
                    Edit
                  </StyledPencilEdit>
                </StyledWrapperButtons>
              </ul>
            </StyledCard>
          );
        }
      )}
    </StyledListCard>
  );
};
