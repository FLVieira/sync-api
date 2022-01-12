class LoginController {
  async login(_, res) {
    const response = {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZmFiaW9AdGVzdGUuY29tLmJyIiwiZGF0ZSI6IjIwMjEtMTAtMjlUMTg6Mjc6MzYuOTI0WiIsInB3Y2hlY2siOiJ7VjF9NzMxODUwQzA4OUM1QTUxNTQyNjlDOURGRDRDOUI1Mjk1Nzc4NTdGNUJCQzMwMzkyQ0YyMzdFQTRCRUUyQzhGOSIsImlhdCI6MTYzNTUzMjA1Nn0.nMGHP8dDAoAaTnc9HTIbQ6YxdX8RE6rvet8h_fT3jQE',
      user: 'fabio@teste.com.br',
      name: 'Fábio',
      lastName: 'teste',
      phonenb: null,
      notifsby: null,
      isAdmin: false,
      permissions: {
        CLIENT_VIEW: [1],
        CLIENT_MANAGE: [1],
        ALTER_SYSTEM_PARS: true,
        MANAGE_ALL_CLIENTS_AND_DACS: true,
        VIEW_ALL_CLIENTS_DACS_GROUPS_UNITS: true,
        MANAGE_UNOWNED_DEVS: true,
      },
      prefs: null,
    };

    return res.status(200).json(response);
  }
}

export default new LoginController();
