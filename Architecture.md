# Application Architecture

```mermaid
flowchart LR
  LoginPage
  Overview_Page
  Transactions_Page

  LoginPage --Login--> Overview_Page
  Overview_Page ==Click On Card==>Transactions_Page
```