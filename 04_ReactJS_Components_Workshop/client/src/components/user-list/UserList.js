import { useState, useEffect } from "react";
import { UserItem } from "./user-item/UserItem";
import * as userService from "../../services/userService";
import { UserDetails } from "./user-details/UserDetails";
import { UserEdit } from "./user-edit/UserEdit";
import { UserDelete } from "./user-delete/UserDelete";
import { AddUser } from "./add-user/AddUser";

const UserActions = {
  Details: "details",
  Edit: "edit",
  Delete: "delete",
  Add: "add",
}
// userlist props removed
export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [userAction, setUserAction] = useState({ user: null, action: null });

  useEffect(() => {
    userService.getAll()
      .then(users => setUsers(users));
  }, []);

  const detailsClickHandler = (userId) => {
    userService.getOne(userId)
      .then(user => {
        setUserAction({
          user,
          action: UserActions.Details
        })
      })
  };

  const editClickHandler = (userId) => {
    userService.getOne(userId)
      .then(user => {
        setUserAction({
          user,
          action: UserActions.Edit
        })
      })
  };

  const deleteClickHandler = (userId) => {
    userService.getOne(userId)
      .then(user => {
        setUserAction({
          user,
          action: UserActions.Delete
        })
      })
  };

  const addClickHandler = () => {
    setUserAction({
      user: null,
      action: UserActions.Add
    })
  };

  const detailsCloseHandler = () => {
    setUserAction({ user: null, action: null })
  }

  const addUserHandler = (userData) => {
    userService.create(userData)
      .then(result => {
        setUsers(oldUsers => [...oldUsers, result.user]);
        detailsCloseHandler();
      })
  }

  // Uncontrolled COMPONENT
  // const addUserHandler = (e) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.target);
  //   const userData = Object.fromEntries(formData);

  //   userService.create(userData)
  //     .then(result => {
  //       setUsers(oldUsers => [...oldUsers, result.user]);
  //       detailsCloseHandler();
  //     })
  // }


  const editUserHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData);
    userData.userId = e.target.id

    userService.editUser(userData)
      .then(result => {
        setUsers(function (oldUsers) {
          const filteredOldUsers = oldUsers.filter(x => x._id !== result.user._id);
          return [...filteredOldUsers, result.user]
        })
        detailsCloseHandler();
      })
  }

  return (
    <>
      <div className="table-wrapper">
        {userAction.action === UserActions.Details &&
          <UserDetails
            user={userAction.user}
            onClose={detailsCloseHandler}
          />
        }

        {userAction.action === UserActions.Edit &&
          <UserEdit
            user={userAction.user}
            onClose={detailsCloseHandler}
            onUserEdit={editUserHandler}
          />
        }

        {userAction.action === UserActions.Delete &&
          <UserDelete
            user={userAction.user}
            onClose={detailsCloseHandler}
          />
        }

        {userAction.action === UserActions.Add &&
          <AddUser
            onClose={detailsCloseHandler}
            onAddUser={addUserHandler}
          />
        }

        <table className="table">
          <thead>
            <tr>
              <th>
                Image
              </th>
              <th>
                First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                  data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Created
                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                  data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- Table row components coming from user-item--> */}
            {users
              .map(user =>
                <UserItem
                  key={user._id}
                  {...user}
                  onDetailsClick={detailsClickHandler}
                  onEditClick={editClickHandler}
                  onDeleteClick={deleteClickHandler}
                />
              )
            }
          </tbody>
        </table>
      </div>
      <button className="btn-add btn" onClick={() => addClickHandler(UserActions.Add)}>Add new user</button>
    </>
  );
}