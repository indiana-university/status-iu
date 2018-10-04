const baseUrl='https://api.status-test.uits.iu.edu'

function makeAPICall(context, endpoint, stateName) {
  return fetch(baseUrl + endpoint)
    .then(res => res.json())
    .then(
      (result) => {
        context.setState({
          [stateName]: result
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        context.setState({
          [stateName]: error
        });
      }
    )
}

export function notices(context) {
  makeAPICall(context, '/Notices', 'notices')
}


export function serviceGroups(context) {
  makeAPICall(context, '/servicegroups', 'groups')
}

export function services(context) {
  makeAPICall(context, '/services', 'services')
}

export function service(context, id) {
  makeAPICall(context, '/services/' + id, 'service')
}

export function campuses(context, id) {
  makeAPICall(context, '/campuses', 'campuses')
}

export function maintenanceWindows(context, id) {
  makeAPICall(context, '/maintenancewindows', 'maintenanceWindows')
}



