import { UserBusiness } from "../src/business/UserBusiness"
import { stringToUserRole, User, UserRole } from "../src/model/User"

describe("Signup", ()=>{
  const idGenerator = { generate: jest.fn() } as any
  const hashGenerator = { hash: jest.fn() } as any
  const tokenGenerator = { generate: jest.fn() } as any
  const userDatabase = { createUser: jest.fn() } as any

  const userBusiness: UserBusiness = new UserBusiness(
    idGenerator,
    hashGenerator,
    tokenGenerator,
    userDatabase
  )

  test("Error when 'name' is empty", async ()=>{
    expect.assertions(2)

    try {
      await userBusiness.signup(
        "",
        "alice@lbn.com",
        "123456",
        "ADMIN"
      )
    } catch (error) {
      expect(error.statusCode).toBe(422)
      expect(error.message).toBe("Missing input")
    }
  })
  
  test("Error when 'email' is empty", async ()=>{
    expect.assertions(2)

    try {
      await userBusiness.signup(
        "Alice",
        "",
        "123456",
        "ADMIN"
      )
    } catch (error) {
      expect(error.statusCode).toBe(422)
      expect(error.message).toBe("Missing input")
    }
  })
  
  test("Error when 'password' is empty", async ()=>{
    expect.assertions(2)

    try {
      await userBusiness.signup(
        "Alice",
        "alice@lbn.com",
        "",
        "ADMIN"
      )
    } catch (error) {
      expect(error.statusCode).toBe(422)
      expect(error.message).toBe("Missing input")
    }
  })
  
  test("Error when 'role' is empty", async ()=>{
    expect.assertions(2)

    try {
      await userBusiness.signup(
        "Alice",
        "alice@lbn.com",
        "123456",
        ""
      )
    } catch (error) {
      expect(error.statusCode).toBe(422)
      expect(error.message).toBe("Missing input")
    }
  })
  
  test("Error when 'email' is invalid", async ()=>{
    expect.assertions(2)

    try {
      await userBusiness.signup(
        "Alice",
        "alicelbn.com",
        "123456",
        "ADMIN"
      )
    } catch (error) {
      expect(error.statusCode).toBe(422)
      expect(error.message).toBe("Invalid email")
    }
  })
  
  test("Error when 'password' is invalid", async ()=>{
    expect.assertions(2)

    try {
      await userBusiness.signup(
        "Alice",
        "alice@lbn.com",
        "123",
        "ADMIN"
      )
    } catch (error) {
      expect(error.statusCode).toBe(422)
      expect(error.message).toBe("Invalid password")
    }
  })
  
  test("Error when 'role' is invalid", async ()=>{
    expect.assertions(2)

    try {
      await userBusiness.signup(
        "Alice",
        "alice@lbn.com",
        "123456",
        "ADMINISTRADOR"
      )
    } catch (error) {
      expect(error.statusCode).toBe(422)
      expect(error.message).toBe("Invalid user role")
    }
  })
  
  test("Success case", async ()=>{
    expect.assertions(1)

    try {
      const result = await userBusiness.signup(
        "Alice",
        "alice@lbn.com",
        "123456",
        "ADMIN"
      )

      expect(result).toBeDefined()
    } catch (error) {

    }
  })
})

describe("Login", ()=>{
  const idGenerator = {} as any
  const hashGenerator = { 
    compareHash: jest.fn(
      () => false
    ) 
  } as any
  const tokenGenerator = { generate: jest.fn() } as any
  const userDatabase = {
    getUserByEmail: jest.fn(
      () => undefined
    )
  } as any

  const userBusiness: UserBusiness = new UserBusiness(
    idGenerator,
    hashGenerator,
    tokenGenerator,
    userDatabase
  )

  test("Error when 'email' is empty", async ()=>{
    expect.assertions(2)

    try {
      await userBusiness.login(
        "",
        "123456"
      )
    } catch (error) {
      expect(error.message).toBe("Missing input")
      expect(error.statusCode).toBe(422)
    }
  })

  test("Error when 'password' is empty", async ()=>{
    expect.assertions(2)

    try {
      await userBusiness.login(
        "alice@lbn.com",
        ""
      )
    } catch (error) {
      expect(error.message).toBe("Missing input")
      expect(error.statusCode).toBe(422)
    }
  })

  test("Error when 'email' is invalid", async ()=>{
    expect.assertions(2)

    try {
      await userBusiness.login(
        "alice@lbn.com",
        "123456"
      )
    } catch (error) {
      expect(error.message).toBe("Invalid credentials")
      expect(error.statusCode).toBe(401)
    }
  })

  test("Error when 'password' is invalid", async ()=>{
    expect.assertions(2)

    try {
      await userBusiness.login(
        "alice@lbn.com",
        "123456"
      )
    } catch (error) {
      expect(error.message).toBe("Invalid credentials")
      expect(error.statusCode).toBe(401)
    }
  })

  test("Success case", async ()=>{

    const idGenerator = {} as any
    const hashGenerator = { 
      compareHash: jest.fn(
        () => true
      ) 
    } as any
    const tokenGenerator = { generate: jest.fn() } as any
    const userDatabase = {
      getUserByEmail: jest.fn(
        () => new User(
           "id",
           "Alice",
           "alice@gmail.com",
           "123456",
           UserRole.NORMAL
        )
      )
    } as any

    const userBusiness: UserBusiness = new UserBusiness(
      idGenerator,
      hashGenerator,
      tokenGenerator,
      userDatabase
    )

    expect.assertions(1)

    try {
      const result = await userBusiness.login(
        "Alice",
        "alice@gmail.com"
      )

      expect(result.accessToken).toBeDefined()
    } catch (error) {
      
    }
  })
})

describe("Get User By Id", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("Should return 'User not found' when user does not exist", async () => {
    expect.assertions(2);
    try {
      const getUserById = jest.fn();
      userDatabase = { getUserById };

      const userBusiness = new UserBusiness(
        idGenerator as any,
        hashGenerator as any,
        tokenGenerator as any,
        userDatabase as any
      );

      await userBusiness.getUserById("invalid-id");
    } catch (err) {
      expect(err.statusCode).toBe(404);
      expect(err.message).toBe("User not found");
    }
  });

  test("Success case", async () => {
    const getUserById = jest.fn(
      (id: string) => new User(
          "id",
          "Astrodev",
          "astrodev@gmail.com",
          "hash",
          stringToUserRole("ADMIN")
        )
    );

    userDatabase = { getUserById };

    const userBusiness = new UserBusiness(
      idGenerator as any,
      hashGenerator as any,
      tokenGenerator as any,
      userDatabase as any
    );

    const user = await userBusiness.getUserById("id");

    expect(getUserById).toHaveBeenCalledWith("id");
    expect(user).toEqual({
      id: "id",
      name: "Astrodev",
      email: "astrodev@gmail.com",
      role: UserRole.ADMIN,
    });
  });
});

describe("Get All Users", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("Should return 'You must be an admin to access this endpoint' when user is NORMAL", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.getAllUsers(UserRole.NORMAL);
    } catch (err) {
      expect(err.statusCode).toBe(401);
      expect(err.message).toBe("You must be an admin to access this endpoint");
    }
  });

  test("Success case", async () => {
    const getAllUsers = jest.fn(() => [
      new User(
        "id",
        "Astrodev",
        "astrodev@gmail.com",
        "hash",
        stringToUserRole("ADMIN")
      ),
    ]);
    userDatabase = { getAllUsers };

    const userBusiness = new UserBusiness(
      idGenerator as any,
      hashGenerator as any,
      tokenGenerator as any,
      userDatabase as any
    );

    const result = await userBusiness.getAllUsers(UserRole.ADMIN);

    expect(getAllUsers).toHaveBeenCalledTimes(1);
    expect(result).toContainEqual({
      id: "id",
      name: "Astrodev",
      email: "astrodev@gmail.com",
      role: UserRole.ADMIN,
    });
  });
});

describe("Get Profile", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("Should return 'User not found' when user does not exist", async () => {
    expect.assertions(2);
    try {
      const getUserById = jest.fn();
      userDatabase = { getUserById };

      const userBusiness = new UserBusiness(
        idGenerator as any,
        hashGenerator as any,
        tokenGenerator as any,
        userDatabase as any
      );

      await userBusiness.getProfile("invalid-id");
    } catch (err) {
      expect(err.statusCode).toBe(404);
      expect(err.message).toBe("User not found");
    }
  });

  test("Success case", async () => {
    const getUserById = jest.fn(
      (id: string) => new User(
          "id",
          "Astrodev",
          "astrodev@gmail.com",
          "hash",
          stringToUserRole("ADMIN")
        )
    );

    userDatabase = { getUserById };

    const userBusiness = new UserBusiness(
      idGenerator as any,
      hashGenerator as any,
      tokenGenerator as any,
      userDatabase as any
    );

    const user = await userBusiness.getProfile("id");

    expect(getUserById).toHaveBeenCalledWith("id");
    expect(user).toEqual({
      id: "id",
      name: "Astrodev",
      email: "astrodev@gmail.com",
      role: UserRole.ADMIN,
    });
  });
});