import { createClient } from '@supabase/supabase-js'

// Замени эти строки своими реальными ключами из настроек Supabase (Project Settings -> API)
const supabaseUrl = 'https://slogkabxhxooxoeflukd.supabase.co'
const supabaseAnonKey = 'sb_publishable_6A88f6IxFv3bA_Qn2HU7IA_srVJbjTs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)