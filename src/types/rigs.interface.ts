interface Rig {
  created_at: string;
  end_ring_service: string;
  id: string;
  message: string;
  rig_ip_address: string;
  rig_location: string;
  rig_model: string;
  rig_name: string;
  rig_port: number;
  rig_serial_number: string;
  rig_status: 'active' | 'inactive' | 'error' | 'maintenance'; // exemplo
  rig_type: 'Mining' | 'Gaming' | 'Workstation'; // exemplo
  rig_username: string;
  temp_rig: number;
  timestamp: string;
  token_rig: string;
  version: string;
}

  export type { Rig };