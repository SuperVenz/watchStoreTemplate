import S from "@sanity/desk-tool/structure-builder";
export const pages = S.listItem()
  .title("Site Pages")
  .child(
    S.list()
      // Sets a title for our new list
      .title("Pages")
      // Add items to the array
      // Each will pull one of our new singletons
      .items([
        // Singletons
        S.listItem()
          .title("Home")
          .child(
            S.document().schemaType("home").documentId("home").title("Edit")
          ),
        S.listItem()
          .title("Deals")
          .child(
            S.document().schemaType("deals").documentId("deals").title("Edit")
          ),
        S.listItem()
          .title("Contact")
          .child(
            S.document()
              .schemaType("contact")
              .documentId("contact")
              .title("Edit")
          ),
        S.listItem()
          .title("Catagories")
          .child(
            S.document()
              .schemaType("catagories")
              .documentId("catagories")
              .title("Edit")
          ),
        // Cart Pages
        S.listItem()
          .title("Cart Pages")
          .child(
            S.list()
              .title("User Pages")
              .items([
                S.listItem()
                  .title("Cart")
                  .child(
                    S.document()
                      .schemaType("cart")
                      .documentId("cart")
                      .title("Edit")
                  ),
                S.listItem()
                  .title("Shipping Page")
                  .child(
                    S.document()
                      .schemaType("shipping")
                      .documentId("shipping")
                      .title("Edit")
                  ),
                S.listItem()
                  .title("Check Out Page")
                  .child(
                    S.document()
                      .schemaType("checkout")
                      .documentId("checkout")
                      .title("Edit")
                  ),
                S.listItem()
                  .title("Confirmation")
                  .child(
                    S.document()
                      .schemaType("confirmation")
                      .documentId("confirmation")
                      .title("Edit")
                  ),
              ])
          ),
        // user Pages
        S.listItem()
          .title("User Pages")
          .child(
            S.list()
              .title("User Pages")
              .items([
                S.listItem()
                  .title("Login")
                  .child(
                    S.document()
                      .schemaType("login")
                      .documentId("login")
                      .title("Edit")
                  ),
                S.listItem()
                  .title("Sign Up")
                  .child(
                    S.document()
                      .schemaType("signUp")
                      .documentId("signUp")
                      .title("Edit")
                  ),
                S.listItem()
                  .title("User Account")
                  .child(
                    S.document()
                      .schemaType("userAccount")
                      .documentId("userAccount")
                      .title("Edit")
                  ),
              ])
          ),
      ])
  );
