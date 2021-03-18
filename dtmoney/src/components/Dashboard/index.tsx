import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { StyledDashboard } from "./styles";

export function Dashboard() {
  return (
    <StyledDashboard.Container>
      <Summary />
      <TransactionsTable />
    </StyledDashboard.Container>
  );
};
