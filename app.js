(function(){
  const LS = window.localStorage;

  function saveCurrentUser(user){
    LS.setItem('cocreate_current_user', JSON.stringify(user));
    window.CoCreateData.currentUser = user;
  }

  function loadCurrentUser(){
    const raw = LS.getItem('cocreate_current_user');
    if(raw){
      try { window.CoCreateData.currentUser = JSON.parse(raw); } catch(e) {}
    }
    return window.CoCreateData.currentUser;
  }

  function saveData(){
    LS.setItem('cocreate_data', JSON.stringify(window.CoCreateData));
  }

  function loadData(){
    const raw = LS.getItem('cocreate_data');
    if(raw){
      try { 
        const saved = JSON.parse(raw);
        window.CoCreateData.users = saved.users || window.CoCreateData.users;
        window.CoCreateData.projects = saved.projects || window.CoCreateData.projects;
        window.CoCreateData.messages = saved.messages || window.CoCreateData.messages;
      } catch(e) {}
    }
  }

  function toast(msg){
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 1800);
  }

  function nav(to){
    saveData(); // Save data before navigation
    window.location.href = to;
  }

  function ensureAuth(){
    const user = loadCurrentUser();
    if(!user){ nav('index.html'); }
    return user;
  }

  // Load data on startup
  loadData();

  // Auto-save data periodically
  setInterval(saveData, 5000);

  // expose
  window.CoCreate = { saveCurrentUser, loadCurrentUser, saveData, loadData, toast, nav, ensureAuth };
})();
