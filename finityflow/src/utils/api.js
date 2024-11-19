import { supabase } from './supabaseClient';

// Authentication
export const login = async (email, password) => {
  const { user, error } = await supabase.auth.signIn({ email, password });
  if (error) throw error;
  return user;
};

export const signup = async (firstName, lastName, email, password) => {
  const { user, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  // Insert into users table
  const { data, error: insertError } = await supabase
    .from('users')
    .insert([{ first_name: firstName, last_name: lastName, email, id: user.id }]);
  if (insertError) throw insertError;
  return user;
};

// Fetch customers
export const fetchCustomers = async (userId) => {
  const { data, error } = await supabase
    .from('customers')
    .select('*')
    .eq('user_id', userId);
  if (error) throw error;
  return data;
};

// Create customer
export const createCustomer = async (customerData) => {
  const { data, error } = await supabase.from('customers').insert([customerData]);
  if (error) throw error;
  return data;
};

// Update customer
export const updateCustomer = async (customerId, updatedData) => {
  const { data, error } = await supabase
    .from('customers')
    .update(updatedData)
    .eq('id', customerId);
  if (error) throw error;
  return data;
};

// Similar functions for quotes, devices, leads, etc.
